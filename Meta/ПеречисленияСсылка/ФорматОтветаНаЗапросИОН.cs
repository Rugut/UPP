
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ФорматОтветаНаЗапросИОН
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"2fb7d226-a683-42e0-abfe-8a22b7cf486e\", \"Представление\":\"TXT\"}")]
		TXT = 0,//Текстовый документ
		[EnumMember(Value = "{\"Ссылка\":\"de8ddc6a-6aba-46eb-be51-8662f04cfca1\", \"Представление\":\"PDF\"}")]
		PDF = 1,//Документ PDF
		[EnumMember(Value = "{\"Ссылка\":\"597e918c-80af-4a71-af03-9a239e410966\", \"Представление\":\"RTF\"}")]
		RTF = 2,//Документ RTF
		[EnumMember(Value = "{\"Ссылка\":\"47cf54e0-c988-41af-be26-344f7eb6e7f5\", \"Представление\":\"XML\"}")]
		XML = 3,//Документ XML
		[EnumMember(Value = "{\"Ссылка\":\"c7445b5a-fa11-49c8-abb2-4b25c33fa788\", \"Представление\":\"HTML\"}")]
		HTML = 4,//Документ HTML
		[EnumMember(Value = "{\"Ссылка\":\"653330a1-a16b-4ec2-89fb-438f5cc0eab0\", \"Представление\":\"XLS\"}")]
		XLS = 5,//Документ XLS
	}
	public static partial class ФорматОтветаНаЗапросИОН_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid TXT = new Guid("228afeab-cfb7-6e48-42e0-a6832fb7d226");//Текстовый документ
		public static readonly Guid PDF = new Guid("628651be-4cf0-a1fc-46eb-6abade8ddc6a");//Документ PDF
		public static readonly Guid RTF = new Guid("239a03af-419e-6609-4a71-80af597e918c");//Документ RTF
		public static readonly Guid XML = new Guid("4f3426be-b67e-f5e7-41af-c98847cf54e0");//Документ XML
		public static readonly Guid HTML = new Guid("254bb2ab-3fc3-88a7-49c8-fa11c7445b5a");//Документ HTML
		public static readonly Guid XLS = new Guid("8f43fb89-c05c-b0ea-4ec2-a16b653330a1");//Документ XLS
		public static ФорматОтветаНаЗапросИОН Получить(this ФорматОтветаНаЗапросИОН Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ФорматОтветаНаЗапросИОН Получить(this ФорматОтветаНаЗапросИОН Значение, Guid Ссылка)
		{
			if(Ссылка == TXT)
			{
				return ФорматОтветаНаЗапросИОН.TXT;
			}
			else if(Ссылка == PDF)
			{
				return ФорматОтветаНаЗапросИОН.PDF;
			}
			else if(Ссылка == RTF)
			{
				return ФорматОтветаНаЗапросИОН.RTF;
			}
			else if(Ссылка == XML)
			{
				return ФорматОтветаНаЗапросИОН.XML;
			}
			else if(Ссылка == HTML)
			{
				return ФорматОтветаНаЗапросИОН.HTML;
			}
			else if(Ссылка == XLS)
			{
				return ФорматОтветаНаЗапросИОН.XLS;
			}
			return ФорматОтветаНаЗапросИОН.ПустаяСсылка;
		}
		public static byte[] Ключ(this ФорматОтветаНаЗапросИОН Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ФорматОтветаНаЗапросИОН Значение)
		{
			switch (Значение)
			{
				case ФорматОтветаНаЗапросИОН.TXT: return TXT;
				case ФорматОтветаНаЗапросИОН.PDF: return PDF;
				case ФорматОтветаНаЗапросИОН.RTF: return RTF;
				case ФорматОтветаНаЗапросИОН.XML: return XML;
				case ФорматОтветаНаЗапросИОН.HTML: return HTML;
				case ФорматОтветаНаЗапросИОН.XLS: return XLS;
			}
			return Guid.Empty;
		}
	}
}