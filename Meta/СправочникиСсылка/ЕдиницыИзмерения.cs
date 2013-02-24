
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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ЕдиницыИзмерения:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("1dec52fd-9ee2-4d32-bf13-245265ae5381");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191955.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.КлассификаторЕдиницИзмерения ЕдиницаПоКлассификатору {get;set;}//Единица по классификатору
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(15.3)*/ Вес {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(15.3)*/ Объем {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10.3)*/ Коэффициент {get;set;}
		public decimal/*(10)*/ ПорогОкругления {get;set;}//Порог округления
		public bool ПредупреждатьОНецелыхМестах {get;set;}//При округлении предупреждать о нецелых местах

		public V82.СправочникиОбъект.ЕдиницыИзмерения  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ЕдиницыИзмерения();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ЕдиницаПоКлассификатору = ЕдиницаПоКлассификатору;
			Объект.Вес = Вес;
			Объект.Объем = Объем;
			Объект.Коэффициент = Коэффициент;
			Объект.ПорогОкругления = ПорогОкругления;
			Объект.ПредупреждатьОНецелыхМестах = ПредупреждатьОНецелыхМестах;
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