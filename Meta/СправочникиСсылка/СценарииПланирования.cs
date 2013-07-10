
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
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class СценарииПланирования:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("8920ee9d-4d8d-4949-a21a-99282c6c391d");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011957.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public bool ЭтоГруппа {get;set;}
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*100*/ Наименование {get;set;}
		public V82.Перечисления/*Ссылка*/.Периодичность Периодичность {get;set;}
		public V82.Перечисления/*Ссылка*/.ДетализацияПланирования ДетализацияПланирования {get;set;}//Детализация планирования
		public bool УчетПоСуммам {get;set;}//Учет по суммам
		public bool УчетПоКоличеству {get;set;}//Учет по количеству
		///<summary>
		///Валюта данных сценария
		///</summary>
		public V82.СправочникиСсылка.Валюты Валюта {get;set;}
		public V82.Перечисления/*Ссылка*/.СпособыПланирования СпособПланирования {get;set;}//Способ планирования
		///<summary>
		///Продолжительность цикла планирования по сценарию (в периодах планирования)
		///</summary>
		public decimal/*(10)*/ ПродолжительностьЦикла {get;set;}//Продолжительность цикла
		///<summary>
		///Начало интервала планирования
		///</summary>
		public DateTime НачалоПлана {get;set;}//Начало плана
		///<summary>
		///Конец интервала планирования
		///</summary>
		public DateTime КонецПлана {get;set;}//Конец плана
		///<summary>
		///Годовая норма доходности для сценария
		///</summary>
		public decimal/*(6.3)*/ НормаДоходности {get;set;}//Норма доходности, %
		///<summary>
		///Признак использования отдельной линейки курсов валют для сценария
		///</summary>
		public bool ИспользоватьКурсыСценария {get;set;}//Использовать курсы сценария
		
		public СценарииПланирования()
		{
		}
		
		public СценарииПланирования(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public СценарииПланирования(byte[] УникальныйИдентификатор,int Глубина)
		{
			if (Глубина>3)
			{
				return;
			}
			if (new Guid(УникальныйИдентификатор) == Guid.Empty)
			{
				return;
			}
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld2012RRef [Периодичность]
					,_Fld2013RRef [ДетализацияПланирования]
					,_Fld2014 [УчетПоСуммам]
					,_Fld2015 [УчетПоКоличеству]
					,_Fld2016RRef [Валюта]
					,_Fld2017RRef [СпособПланирования]
					,_Fld2018 [ПродолжительностьЦикла]
					,_Fld2019 [НачалоПлана]
					,_Fld2020 [КонецПлана]
					,_Fld2021 [НормаДоходности]
					,_Fld2022 [ИспользоватьКурсыСценария]
					From _Reference169(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  and _Folder = 0x01  ";
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
							Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Код = Читалка.GetString(4);
							Наименование = Читалка.GetString(5);
							Периодичность = V82.Перечисления/*Ссылка*/.Периодичность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(6));
							ДетализацияПланирования = V82.Перечисления/*Ссылка*/.ДетализацияПланирования.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
							УчетПоСуммам = ((byte[])Читалка.GetValue(8))[0]==1;
							УчетПоКоличеству = ((byte[])Читалка.GetValue(9))[0]==1;
							Валюта = new V82.СправочникиСсылка.Валюты((byte[])Читалка.GetValue(10),Глубина+1);
							СпособПланирования = V82.Перечисления/*Ссылка*/.СпособыПланирования.ПустаяСсылка.Получить((byte[])Читалка.GetValue(11));
							ПродолжительностьЦикла = Читалка.GetDecimal(12);
							НачалоПлана = Читалка.GetDateTime(13);
							КонецПлана = Читалка.GetDateTime(14);
							НормаДоходности = Читалка.GetDecimal(15);
							ИспользоватьКурсыСценария = ((byte[])Читалка.GetValue(16))[0]==1;
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
		
		public V82.СправочникиОбъект.СценарииПланирования  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.СценарииПланирования();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Периодичность = Периодичность;
			Объект.ДетализацияПланирования = ДетализацияПланирования;
			Объект.УчетПоСуммам = УчетПоСуммам;
			Объект.УчетПоКоличеству = УчетПоКоличеству;
			Объект.Валюта = Валюта;
			Объект.СпособПланирования = СпособПланирования;
			Объект.ПродолжительностьЦикла = ПродолжительностьЦикла;
			Объект.НачалоПлана = НачалоПлана;
			Объект.КонецПлана = КонецПлана;
			Объект.НормаДоходности = НормаДоходности;
			Объект.ИспользоватьКурсыСценария = ИспользоватьКурсыСценария;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.СценарииПланирования ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.СценарииПланирования)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.СценарииПланирования(УникальныйИдентификатор);
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