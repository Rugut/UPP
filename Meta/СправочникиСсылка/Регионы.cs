
using System;
using System.IO;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	///<summary>
	///Регионы
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class Регионы:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("16fd8951-9da4-48cb-ab60-cce13c5c8405");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191858.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public bool Предопределенный {get;set;}
		public Guid Родитель {get;set;}
		public string/*9*/ Код {get;set;}
		public string/*150*/ Наименование {get;set;}
		///<summary>
		///Комментарий
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public string/*(5)*/ КодРегиона {get;set;}//Код региона
		public decimal/*(25)*/ КодАдресногоЭлемента {get;set;}//Код адресного элемента
		///<summary>
		///Железнодорожная станция назначения
		///</summary>
		public string/*(100)*/ ЖДСтанцияНазначения {get;set;}//Ж/Д cтанция назначения

		public V82.СправочникиОбъект.Регионы  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.Регионы();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Комментарий = Комментарий;
			Объект.КодРегиона = КодРегиона;
			Объект.КодАдресногоЭлемента = КодАдресногоЭлемента;
			Объект.ЖДСтанцияНазначения = ЖДСтанцияНазначения;
			return Объект;
		}

		public void СериализацияProtoBuf(Stream Поток)
		{
			Serializer.Serialize(Поток,this);
		}

		public string СериализацияJson()
		{
			return this.ToJson();
		}

		public string СериализацияXml()
		{
			return this.ToXml();
		}
	}
}