
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
	public enum ¬иды“екстовЁлектронныхѕисем
	{
		ѕуста€—сылка = - 1,
		HTML = 0,
		“екст = 1,//ѕростой текст
		ѕрочее = 2,
		HTML— артинками = 3,//HTML с картинками
	}
	public static partial class ¬иды“екстовЁлектронныхѕисем_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid HTML = new Guid("908e1c80-5002-09d3-4530-c2a1286e20e8");
		public static readonly Guid “екст = new Guid("257a76a1-e6f5-4561-46d6-af808186d7b5");//ѕростой текст
		public static readonly Guid ѕрочее = new Guid("e3d508bd-386a-0f58-48db-628a9f02ff83");
		public static readonly Guid HTML— артинками = new Guid("bfedb6aa-8341-cdf3-4e1f-11b95b11992f");//HTML с картинками
		public static ¬иды“екстовЁлектронныхѕисем ѕолучить(this ¬иды“екстовЁлектронныхѕисем «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ¬иды“екстовЁлектронныхѕисем ѕолучить(this ¬иды“екстовЁлектронныхѕисем «начение, Guid —сылка)
		{
			if(—сылка == HTML)
			{
				return ¬иды“екстовЁлектронныхѕисем.HTML;
			}
			else if(—сылка == “екст)
			{
				return ¬иды“екстовЁлектронныхѕисем.“екст;
			}
			else if(—сылка == ѕрочее)
			{
				return ¬иды“екстовЁлектронныхѕисем.ѕрочее;
			}
			else if(—сылка == HTML— артинками)
			{
				return ¬иды“екстовЁлектронныхѕисем.HTML— артинками;
			}
			return ¬иды“екстовЁлектронныхѕисем.ѕуста€—сылка;
		}
		public static byte[]  люч(this ¬иды“екстовЁлектронныхѕисем «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ¬иды“екстовЁлектронныхѕисем «начение)
		{
			switch («начение)
			{
				case ¬иды“екстовЁлектронныхѕисем.HTML: return HTML;
				case ¬иды“екстовЁлектронныхѕисем.“екст: return “екст;
				case ¬иды“екстовЁлектронныхѕисем.ѕрочее: return ѕрочее;
				case ¬иды“екстовЁлектронныхѕисем.HTML— артинками: return HTML— артинками;
			}
			return Guid.Empty;
		}
	}
}
