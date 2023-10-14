원티드 프리온보딩 백엔드 인턴십
요구사항 및 처리

//전체적인 에러핸들링은 하지 않고 기능만 구현하였음.

1.채용공고를 등록합니다.
{
  "id": "1" // post_id
  "company_id": "1", //임시 컬럼 (유저(회사) 테이블 생성 시 제거
  "title": "원티드",
  "position": "백앤드 주니어 개발자",
  "description": "원티드랩에서 백엔드 주니어 개발자를 채용합니다. 자격요건은..",
  "skill": "NODEJS",
}
// 유저 및 회사 테이블이 존재하지 않기 때문에 임시로 'company_id' 컬럼을 추가.

2. 채용공고 수정
UpdatePostDto
export class UpdatePostDto extends PartialType(CreatePostDto) {
  position?: string;
  point?: number;
  description?: string;
  skill?: string;
}
//DTO를 이용하여 수정할 값 UpdatePostDto 타입 지정.

3. 채용공고를 삭제합니다.
DB에서 삭제됩니다.

4. 채용공고 목록을 가져옵니다.
[

  {
    "id": 1,
    "title": "원티드",
    "position": "포지션1",
    "point": 1000,//디폴트 값 0
    "skill": "스킬1"
  },
  {
    "id": 2,
    "title": "원티드2",
    "position": "포지션2",
    "point": 100000,
    "skill": "스킬2"
  }

]
// select을 이용하여 description 제외하고 보여줌.

4-2. 채용공고 검색 기능 구현(선택사항 및 가산점요소).
export class FindPostDto extends PartialType(CreatePostDto) {
  title?: string;
  position?: string;
  point?: number;
  skill?: string;
}
//검색할 값을 Param로 받아 FindPostDto에 타입 지정
  Like(`%${findPostDto}%`를 이용하여 검색한 값과 일치하는 것을 찾음.

5. 채용 상세 페이지를 가져옵니다.
{
  "id": 2,  // post_id
  "title": "원티드",
  "point": 0,
  "position": "포지션",
  "skill": "스킬",
  "description": "설명",
  "other": [1,2,3,4,5,6] //post_id
}

// 회사가올린다른채용공고를 보여주기 위해 find를 이용하여 map을 사용함.
async findOne(id: number) {
    const findPost = await this.postRepositorty.findOne({
      where: { id },
    });
    const otherPost = await this.postRepositorty.find({
      where: { company_id: findPost.company_id },
    });
    return {
      id: findPost.id,
      title: findPost.title,
      point: findPost.point,
      position: findPost.position,
      skill: findPost.skill,
      description: findPost.description,
      other: otherPost.map((v) => v.id),
    };
  }

6. 사용자는 채용공고에 지원합니다(선택사항 및 가산점요소).
async apply(postId: number, userId: number): Promise<any> {
    const existApply = await this.applyRepositorty.findOne({
      where: { post: { id: postId }, userId },
    });
    try {
      if (existApply) {
        throw new Error('이미 신청하였습니다.');
      }
      await this.applyRepositorty.apply(postId, userId);
    } catch (error) {
      throw new BadRequestException();
    }
  }
//추가적인 APlly 테이블 생성하여 Post 테이블과 일대다 관계를 생성 후
  유저 테이블은 존재하지 않아서 Apply 테이블 생성 시, 받은  Param를 통해 userId 값을 받아 저장.
  이미 생성된 경우 if문을 이용하여 추가적인 신청을 못하도록 함.
