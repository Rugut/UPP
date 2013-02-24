
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
	///Контактные лица контрагентов
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class КонтактныеЛицаКонтрагентов:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("73fad1f0-e174-4c7d-9132-e00ad2212966");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191620.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*100*/ Наименование {get;set;}
		public string/*(100)*/ Должность {get;set;}
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.КонтактныеЛица КонтактноеЛицо {get;set;}//Контактное лицо
		public V82.СправочникиСсылка.РолиКонтактныхЛиц РольКонтактногоЛица {get;set;}//Роль контактного лица

		public V82.СправочникиОбъект.КонтактныеЛицаКонтрагентов  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.КонтактныеЛицаКонтрагентов();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Должность = Должность;
			Объект.Комментарий = Комментарий;
			Объект.КонтактноеЛицо = КонтактноеЛицо;
			Объект.РольКонтактногоЛица = РольКонтактногоЛица;
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