
using System;
using System.Collections;
using System.IO;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ПереоценкаТоваровОтданныхНаКомиссию:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("4cc88759-4142-46cc-96c3-349fa6abdfcc");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191509.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public DateTime Дата {get;set;}
		public DateTime ПрефиксНомера {get;set;}
		public string/*11*/ Номер {get;set;}
		public bool Проведен {get;set;}
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public object Сделка {get;set;}
		
		public ПереоценкаТоваровОтданныхНаКомиссию()
		{
		}
		
		public ПереоценкаТоваровОтданныхНаКомиссию(byte[] УникальныйИдентификатор)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Number [Номер]
					,_Fld12637RRef [Организация]
					,_Fld12638RRef [ТипЦен]
					,_Fld12639RRef [ВалютаДокумента]
					,_Fld12640RRef [Контрагент]
					,_Fld12641RRef [ДоговорКонтрагента]
					,_Fld12642RRef [Подразделение]
					,_Fld12643 [Комментарий]
					,_Fld12644 [КурсВзаиморасчетов]
					,_Fld12645 [КратностьВзаиморасчетов]
					,_Fld12646RRef [Ответственный]
					,_Fld12647_TYPE [Сделка_Тип],_Fld12647_RRRef [Сделка],_Fld12647_RTRef [Сделка_Вид]
					From _Document503(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор";
					Команда.Parameters.AddWithValue("УникальныйИдентификатор", УникальныйИдентификатор);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							//ToDo: Читать нужно через GetValues()
							Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Номер = Читалка.GetString(3);
							Комментарий = Читалка.GetString(10);
							КурсВзаиморасчетов = Читалка.GetDecimal(11);
							КратностьВзаиморасчетов = Читалка.GetDecimal(12);
							//return Ссылка;
						}
						else
						{
							//return null;
						}
					}
				}
			}
		}
		
		public V82.ДокументыОбъект.ПереоценкаТоваровОтданныхНаКомиссию  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ПереоценкаТоваровОтданныхНаКомиссию();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.ТипЦен = ТипЦен;
			Объект.ВалютаДокумента = ВалютаДокумента;
			Объект.Контрагент = Контрагент;
			Объект.ДоговорКонтрагента = ДоговорКонтрагента;
			Объект.Подразделение = Подразделение;
			Объект.Комментарий = Комментарий;
			Объект.КурсВзаиморасчетов = КурсВзаиморасчетов;
			Объект.КратностьВзаиморасчетов = КратностьВзаиморасчетов;
			Объект.Ответственный = Ответственный;
			Объект.Сделка = Сделка;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ПереоценкаТоваровОтданныхНаКомиссию ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ПереоценкаТоваровОтданныхНаКомиссию)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ПереоценкаТоваровОтданныхНаКомиссию(УникальныйИдентификатор);
			Кэш.Add(УИ, Ссылка);
			return Ссылка;
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