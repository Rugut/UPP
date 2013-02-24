
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
	[ProtoContract]
	[DataContract]
	public partial class ФильтрыДляЭлектронныхПисем:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("43e8a55f-cbaf-4a62-8b76-39e32f9944df");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191824.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public Guid Владелец {get;set;}
		public string/*9*/ Код {get;set;}
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///Истина - И, ложь - ИЛИ
		///</summary>
		public bool ОперацияУсловия {get;set;}//Операция условия
		public decimal/*(6)*/ Порядок {get;set;}
		public bool Использование {get;set;}

		public V82.СправочникиОбъект.ФильтрыДляЭлектронныхПисем  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ФильтрыДляЭлектронныхПисем();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ОперацияУсловия = ОперацияУсловия;
			Объект.Порядок = Порядок;
			Объект.Использование = Использование;
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