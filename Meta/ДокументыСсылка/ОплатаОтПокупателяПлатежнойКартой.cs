﻿
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
	public partial class ОплатаОтПокупателяПлатежнойКартой:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("1cce5e1a-937e-4d78-8bb0-14bcd21fed5b");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011945.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Упр)
		///</summary>
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыОперацийОплатаОтПокупателяПлатежнойКартой ВидОперации {get;set;}//Вид операции
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}//Контрагент, подотчетник, касса ККМ
		///<summary>
		///(Общ) Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public object ДокументОснование {get;set;}//Документ основание
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
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///Номер чека на фискальном регистраторе
		///</summary>
		public decimal/*(8)*/ НомерЧекаККМ {get;set;}//Номер чека ККМ
		public V82.СправочникиСсылка.ДоговорыЭквайринга ДоговорЭквайринга {get;set;}//Договор эквайринга
		public V82.СправочникиСсылка.Контрагенты Эквайрер {get;set;}
		public V82.СправочникиСсылка.ДоговорыКонтрагентов ДоговорВзаиморасчетовЭквайрера {get;set;}//Договор взаиморасчетов эквайрера
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		///<summary>
		///(Регл)
		///</summary>
		public object СчетУчетаРасчетовСЭквайрером {get;set;}//Счет учета расчетов с эквайрером
		public V82.СправочникиСсылка.ВидыОплатЧекаККМ ВидОплаты {get;set;}//Вид оплаты
		public decimal/*(5.2)*/ ПроцентТорговойУступки {get;set;}//Процент торговой уступки
		public decimal/*(15.2)*/ СуммаТорговойУступки {get;set;}//Сумма торговой уступки
		
		public ОплатаОтПокупателяПлатежнойКартой()
		{
		}
		
		public ОплатаОтПокупателяПлатежнойКартой(byte[] УникальныйИдентификатор)
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
					,_Fld6649RRef [Организация]
					,_Fld6650RRef [Подразделение]
					,_Fld6651RRef [ВидОперации]
					,_Fld6652RRef [Контрагент]
					,_Fld6653 [СуммаДокумента]
					,_Fld6654RRef [Ответственный]
					,_Fld6655 [Комментарий]
					,_Fld6656_TYPE [ДокументОснование_Тип],_Fld6656_RRRef [ДокументОснование],_Fld6656_RTRef [ДокументОснование_Вид]
					,_Fld6657 [ОтражатьВУправленческомУчете]
					,_Fld6658 [ОтражатьВБухгалтерскомУчете]
					,_Fld6659 [ОтражатьВНалоговомУчете]
					,_Fld6660 [НомерЧекаККМ]
					,_Fld6661RRef [ДоговорЭквайринга]
					,_Fld6662RRef [Эквайрер]
					,_Fld6663RRef [ДоговорВзаиморасчетовЭквайрера]
					,_Fld6664RRef [ВалютаДокумента]
					,_Fld6665RRef [СчетУчетаРасчетовСЭквайрером]
					,_Fld6666RRef [ВидОплаты]
					,_Fld6667 [ПроцентТорговойУступки]
					,_Fld6668 [СуммаТорговойУступки]
					From _Document335(NOLOCK)
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
							ВидОперации = V82.Перечисления/*Ссылка*/.ВидыОперацийОплатаОтПокупателяПлатежнойКартой.ПустаяСсылка.Получить((byte[])Читалка.GetValue(6));
							СуммаДокумента = Читалка.GetDecimal(8);
							Комментарий = Читалка.GetString(10);
							ОтражатьВУправленческомУчете = ((byte[])Читалка.GetValue(14))[0]==1;
							ОтражатьВБухгалтерскомУчете = ((byte[])Читалка.GetValue(15))[0]==1;
							ОтражатьВНалоговомУчете = ((byte[])Читалка.GetValue(16))[0]==1;
							НомерЧекаККМ = Читалка.GetDecimal(17);
							ПроцентТорговойУступки = Читалка.GetDecimal(24);
							СуммаТорговойУступки = Читалка.GetDecimal(25);
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
		
		public V82.ДокументыОбъект.ОплатаОтПокупателяПлатежнойКартой  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ОплатаОтПокупателяПлатежнойКартой();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Подразделение = Подразделение;
			Объект.ВидОперации = ВидОперации;
			Объект.Контрагент = Контрагент;
			Объект.СуммаДокумента = СуммаДокумента;
			Объект.Ответственный = Ответственный;
			Объект.Комментарий = Комментарий;
			Объект.ДокументОснование = ДокументОснование;
			Объект.ОтражатьВУправленческомУчете = ОтражатьВУправленческомУчете;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.ОтражатьВНалоговомУчете = ОтражатьВНалоговомУчете;
			Объект.НомерЧекаККМ = НомерЧекаККМ;
			Объект.ДоговорЭквайринга = ДоговорЭквайринга;
			Объект.Эквайрер = Эквайрер;
			Объект.ДоговорВзаиморасчетовЭквайрера = ДоговорВзаиморасчетовЭквайрера;
			Объект.ВалютаДокумента = ВалютаДокумента;
			Объект.СчетУчетаРасчетовСЭквайрером = СчетУчетаРасчетовСЭквайрером;
			Объект.ВидОплаты = ВидОплаты;
			Объект.ПроцентТорговойУступки = ПроцентТорговойУступки;
			Объект.СуммаТорговойУступки = СуммаТорговойУступки;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ОплатаОтПокупателяПлатежнойКартой ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ОплатаОтПокупателяПлатежнойКартой)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ОплатаОтПокупателяПлатежнойКартой(УникальныйИдентификатор);
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