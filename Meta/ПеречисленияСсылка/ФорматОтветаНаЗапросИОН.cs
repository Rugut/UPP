
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
	public enum ‘орматќтветаЌа«апрос»ќЌ
	{
		ѕуста€—сылка = - 1,
		TXT = 0,//“екстовый документ
		PDF = 1,//ƒокумент PDF
		RTF = 2,//ƒокумент RTF
		XML = 3,//ƒокумент XML
		HTML = 4,//ƒокумент HTML
		XLS = 5,//ƒокумент XLS
	}
	public static partial class ‘орматќтветаЌа«апрос»ќЌ_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid TXT = new Guid("228afeab-cfb7-6e48-42e0-a6832fb7d226");//“екстовый документ
		public static readonly Guid PDF = new Guid("628651be-4cf0-a1fc-46eb-6abade8ddc6a");//ƒокумент PDF
		public static readonly Guid RTF = new Guid("239a03af-419e-6609-4a71-80af597e918c");//ƒокумент RTF
		public static readonly Guid XML = new Guid("4f3426be-b67e-f5e7-41af-c98847cf54e0");//ƒокумент XML
		public static readonly Guid HTML = new Guid("254bb2ab-3fc3-88a7-49c8-fa11c7445b5a");//ƒокумент HTML
		public static readonly Guid XLS = new Guid("8f43fb89-c05c-b0ea-4ec2-a16b653330a1");//ƒокумент XLS
		public static ‘орматќтветаЌа«апрос»ќЌ ѕолучить(this ‘орматќтветаЌа«апрос»ќЌ «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ‘орматќтветаЌа«апрос»ќЌ ѕолучить(this ‘орматќтветаЌа«апрос»ќЌ «начение, Guid —сылка)
		{
			if(—сылка == TXT)
			{
				return ‘орматќтветаЌа«апрос»ќЌ.TXT;
			}
			else if(—сылка == PDF)
			{
				return ‘орматќтветаЌа«апрос»ќЌ.PDF;
			}
			else if(—сылка == RTF)
			{
				return ‘орматќтветаЌа«апрос»ќЌ.RTF;
			}
			else if(—сылка == XML)
			{
				return ‘орматќтветаЌа«апрос»ќЌ.XML;
			}
			else if(—сылка == HTML)
			{
				return ‘орматќтветаЌа«апрос»ќЌ.HTML;
			}
			else if(—сылка == XLS)
			{
				return ‘орматќтветаЌа«апрос»ќЌ.XLS;
			}
			return ‘орматќтветаЌа«апрос»ќЌ.ѕуста€—сылка;
		}
		public static byte[]  люч(this ‘орматќтветаЌа«апрос»ќЌ «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ‘орматќтветаЌа«апрос»ќЌ «начение)
		{
			switch («начение)
			{
				case ‘орматќтветаЌа«апрос»ќЌ.TXT: return TXT;
				case ‘орматќтветаЌа«апрос»ќЌ.PDF: return PDF;
				case ‘орматќтветаЌа«апрос»ќЌ.RTF: return RTF;
				case ‘орматќтветаЌа«апрос»ќЌ.XML: return XML;
				case ‘орматќтветаЌа«апрос»ќЌ.HTML: return HTML;
				case ‘орматќтветаЌа«апрос»ќЌ.XLS: return XLS;
			}
			return Guid.Empty;
		}
	}
}
