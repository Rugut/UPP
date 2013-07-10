
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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ПереоценкаТоваровПринятыхНаКомиссию:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("e49c7767-40d1-408f-8d70-6fdaa62a644b");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012011.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Склады Склад {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ТипыЦенНоменклатурыКонтрагентов ТипЦен {get;set;}//Тип цен
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public object Сделка {get;set;}
		public string/*(20)*/ НомерВходящегоДокументаЭлектронногоОбмена {get;set;}//Номер входящего документа электронного обмена
		public DateTime ДатаВходящегоДокументаЭлектронногоОбмена {get;set;}//Дата входящего документа электронного обмена
		
		public ПереоценкаТоваровПринятыхНаКомиссию()
		{
		}
		
		public ПереоценкаТоваровПринятыхНаКомиссию(byte[] УникальныйИдентификатор)
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
					,_Fld8261 [ОтражатьВУправленческомУчете]
					,_Fld8262 [ОтражатьВБухгалтерскомУчете]
					,_Fld8263RRef [Организация]
					,_Fld8264RRef [Склад]
					,_Fld8265RRef [ТипЦен]
					,_Fld8266RRef [ВалютаДокумента]
					,_Fld8267 [КурсВзаиморасчетов]
					,_Fld8268RRef [Контрагент]
					,_Fld8269RRef [ДоговорКонтрагента]
					,_Fld8270RRef [Подразделение]
					,_Fld8271 [Комментарий]
					,_Fld8272 [КратностьВзаиморасчетов]
					,_Fld8273RRef [Ответственный]
					,_Fld8274_TYPE [Сделка_Тип],_Fld8274_RRRef [Сделка],_Fld8274_RTRef [Сделка_Вид]
					,_Fld21820 [НомерВходящегоДокументаЭлектронногоОбмена]
					,_Fld21821 [ДатаВходящегоДокументаЭлектронногоОбмена]
					From _Document379(NOLOCK)
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
							ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(4))[0]==1;
							ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(5))[0]==1;
							КурсВзаиморасчетов = Читалка.GetDecimal(10);
							Комментарий = Читалка.GetString(14);
							КратностьВзаиморасчетов = Читалка.GetDecimal(15);
							НомерВходящегоДокументаЭлектронногоОбмена = Читалка.GetString(20);
							ДатаВходящегоДокументаЭлектронногоОбмена = Читалка.GetDateTime(21);
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
		
		public V82.ДокументыОбъект.ПереоценкаТоваровПринятыхНаКомиссию  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ПереоценкаТоваровПринятыхНаКомиссию();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ОтражатьВУправленческомУчете = ОтражатьВУправленческомУчете;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.Организация = Организация;
			Объект.Склад = Склад;
			Объект.ТипЦен = ТипЦен;
			Объект.ВалютаДокумента = ВалютаДокумента;
			Объект.КурсВзаиморасчетов = КурсВзаиморасчетов;
			Объект.Контрагент = Контрагент;
			Объект.ДоговорКонтрагента = ДоговорКонтрагента;
			Объект.Подразделение = Подразделение;
			Объект.Комментарий = Комментарий;
			Объект.КратностьВзаиморасчетов = КратностьВзаиморасчетов;
			Объект.Ответственный = Ответственный;
			Объект.Сделка = Сделка;
			Объект.НомерВходящегоДокументаЭлектронногоОбмена = НомерВходящегоДокументаЭлектронногоОбмена;
			Объект.ДатаВходящегоДокументаЭлектронногоОбмена = ДатаВходящегоДокументаЭлектронногоОбмена;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ПереоценкаТоваровПринятыхНаКомиссию ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ПереоценкаТоваровПринятыхНаКомиссию)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ПереоценкаТоваровПринятыхНаКомиссию(УникальныйИдентификатор);
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