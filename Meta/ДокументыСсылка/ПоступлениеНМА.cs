
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
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ПоступлениеНМА:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("891b8cfb-f52f-4158-a370-0b8a7602263e");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012031.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ) 
		///</summary>
		public DateTime ДатаВходящегоДокумента {get;set;}//Дата документа сторонней организации
		///<summary>
		///(Общ) 
		///</summary>
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ) 
		///</summary>
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///(Общ) 
		///</summary>
		public decimal/*(10)*/ КратностьВзаиморасчетов {get;set;}//Кратность взаиморасчетов
		///<summary>
		///(Общ) 
		///</summary>
		public decimal/*(10.4)*/ КурсВзаиморасчетов {get;set;}//Курс взаиморасчетов
		///<summary>
		///(Регл)
		///</summary>
		public bool НДСВключенВСтоимость {get;set;}//НДС включен в стоимость
		///<summary>
		///(Общ) 
		///</summary>
		public string/*(30)*/ НомерВходящегоДокумента {get;set;}//Номер документа сторонней организации
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ) 
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаРасчетовПоАвансам {get;set;}//Счет учета расчетов по авансам
		///<summary>
		///(Регл) 
		///</summary>
		public object СчетУчетаРасчетовСКонтрагентом {get;set;}//Счет учета расчетов с контрагентом
		///<summary>
		///(Общ)
		///</summary>
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		
		public ПоступлениеНМА()
		{
		}
		
		public ПоступлениеНМА(byte[] УникальныйИдентификатор)
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
					,_Fld9319RRef [ВалютаДокумента]
					,_Fld9320 [ДатаВходящегоДокумента]
					,_Fld9321RRef [ДоговорКонтрагента]
					,_Fld9322 [Комментарий]
					,_Fld9323RRef [Контрагент]
					,_Fld9324 [КратностьВзаиморасчетов]
					,_Fld9325 [КурсВзаиморасчетов]
					,_Fld9326 [НДСВключенВСтоимость]
					,_Fld9327 [НомерВходящегоДокумента]
					,_Fld9328RRef [Организация]
					,_Fld9329RRef [Ответственный]
					,_Fld9330 [ОтражатьВБухгалтерскомУчете]
					,_Fld9331 [ОтражатьВНалоговомУчете]
					,_Fld9332 [СуммаВключаетНДС]
					,_Fld9333 [СуммаДокумента]
					,_Fld9334RRef [СчетУчетаРасчетовПоАвансам]
					,_Fld9335RRef [СчетУчетаРасчетовСКонтрагентом]
					,_Fld9336 [УчитыватьНДС]
					From _Document401(NOLOCK)
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
							ДатаВходящегоДокумента = Читалка.GetDateTime(5);
							Комментарий = Читалка.GetString(7);
							КратностьВзаиморасчетов = Читалка.GetDecimal(9);
							КурсВзаиморасчетов = Читалка.GetDecimal(10);
							НДСВключенВСтоимость = ((byte[])Читалка.GetValue(11))[0]==1;
							НомерВходящегоДокумента = Читалка.GetString(12);
							ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(15))[0]==1;
							ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(16))[0]==1;
							СуммаВключаетНДС = ((byte[])Читалка.GetValue(17))[0]==1;
							СуммаДокумента = Читалка.GetDecimal(18);
							УчитыватьНДС = ((byte[])Читалка.GetValue(21))[0]==1;
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
		
		public V82.ДокументыОбъект.ПоступлениеНМА  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ПоступлениеНМА();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ВалютаДокумента = ВалютаДокумента;
			Объект.ДатаВходящегоДокумента = ДатаВходящегоДокумента;
			Объект.ДоговорКонтрагента = ДоговорКонтрагента;
			Объект.Комментарий = Комментарий;
			Объект.Контрагент = Контрагент;
			Объект.КратностьВзаиморасчетов = КратностьВзаиморасчетов;
			Объект.КурсВзаиморасчетов = КурсВзаиморасчетов;
			Объект.НДСВключенВСтоимость = НДСВключенВСтоимость;
			Объект.НомерВходящегоДокумента = НомерВходящегоДокумента;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.ОтражатьВНалоговомУчете = ОтражатьВНалоговомУчете;
			Объект.СуммаВключаетНДС = СуммаВключаетНДС;
			Объект.СуммаДокумента = СуммаДокумента;
			Объект.СчетУчетаРасчетовПоАвансам = СчетУчетаРасчетовПоАвансам;
			Объект.СчетУчетаРасчетовСКонтрагентом = СчетУчетаРасчетовСКонтрагентом;
			Объект.УчитыватьНДС = УчитыватьНДС;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ПоступлениеНМА ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ПоступлениеНМА)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ПоступлениеНМА(УникальныйИдентификатор);
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