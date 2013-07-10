
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
	public partial class ВозвратПереданныхТоваров:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("782a9d94-ace7-41c9-8792-1ed163f35c7b");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012032.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыОперацийВозвратТоваров ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыПоступленияТоваров ВидПоступления {get;set;}//Вид поступления
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорКонтрагента {get;set;}//Договор контрагента
		///<summary>
		///(Общ)
		///</summary>
		public object Заказ {get;set;}
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
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		public object СкладОрдер {get;set;}//Склад ордер
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаРасчетовПоТаре {get;set;}//Счет учета расчетов по таре
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		
		public ВозвратПереданныхТоваров()
		{
		}
		
		public ВозвратПереданныхТоваров(byte[] УникальныйИдентификатор)
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
					,_Fld3609RRef [ВалютаДокумента]
					,_Fld3610RRef [ВидОперации]
					,_Fld3611RRef [ВидПоступления]
					,_Fld3612RRef [ДоговорКонтрагента]
					,_Fld3613_TYPE [Заказ_Тип],_Fld3613_RRRef [Заказ],_Fld3613_RTRef [Заказ_Вид]
					,_Fld3614 [Комментарий]
					,_Fld3615RRef [Контрагент]
					,_Fld3616 [КратностьВзаиморасчетов]
					,_Fld3617 [КурсВзаиморасчетов]
					,_Fld3619RRef [Организация]
					,_Fld3620RRef [Ответственный]
					,_Fld3621 [ОтражатьВБухгалтерскомУчете]
					,_Fld3622 [ОтражатьВНалоговомУчете]
					,_Fld3623 [ОтражатьВУправленческомУчете]
					,_Fld3624_TYPE [СкладОрдер_Тип],_Fld3624_RRRef [СкладОрдер],_Fld3624_RTRef [СкладОрдер_Вид]
					,_Fld3626 [СуммаДокумента]
					,_Fld3627RRef [СчетУчетаРасчетовПоТаре]
					,_Fld3628RRef [ТипЦен]
					From _Document235(NOLOCK)
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
							ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийВозвратТоваров.ПустаяСсылка.Получить((byte[])Читалка.GetValue(5));
							ВидПоступления = V82.Перечисления/*Ссылка*/.ВидыПоступленияТоваров.ПустаяСсылка.Получить((byte[])Читалка.GetValue(6));
							Комментарий = Читалка.GetString(11);
							КратностьВзаиморасчетов = Читалка.GetDecimal(13);
							КурсВзаиморасчетов = Читалка.GetDecimal(14);
							ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(17))[0]==1;
							ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(18))[0]==1;
							ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(19))[0]==1;
							СуммаДокумента = Читалка.GetDecimal(23);
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
		
		public V82.ДокументыОбъект.ВозвратПереданныхТоваров  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ВозвратПереданныхТоваров();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ВалютаДокумента = ВалютаДокумента;
			Объект.ВидОперации = ВидОперации;
			Объект.ВидПоступления = ВидПоступления;
			Объект.ДоговорКонтрагента = ДоговорКонтрагента;
			Объект.Заказ = Заказ;
			Объект.Комментарий = Комментарий;
			Объект.Контрагент = Контрагент;
			Объект.КратностьВзаиморасчетов = КратностьВзаиморасчетов;
			Объект.КурсВзаиморасчетов = КурсВзаиморасчетов;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.ОтражатьВНалоговомУчете = ОтражатьВНалоговомУчете;
			Объект.ОтражатьВУправленческомУчете = ОтражатьВУправленческомУчете;
			Объект.СкладОрдер = СкладОрдер;
			Объект.СуммаДокумента = СуммаДокумента;
			Объект.СчетУчетаРасчетовПоТаре = СчетУчетаРасчетовПоТаре;
			Объект.ТипЦен = ТипЦен;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ВозвратПереданныхТоваров ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ВозвратПереданныхТоваров)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ВозвратПереданныхТоваров(УникальныйИдентификатор);
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