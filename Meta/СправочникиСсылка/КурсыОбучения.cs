
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
	[ProtoContract]
	[DataContract]
	public partial class КурсыОбучения:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("0ba658fc-b975-4c48-b839-01203b472215");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012029.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.КурсыОбучения Родитель {get;set;}
		public bool ЭтоГруппа {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*150*/ Наименование {get;set;}
		public string/*(0)*/ ОписаниеКурса {get;set;}//Описание курса
		///<summary>
		///Длительность курса в часах
		///</summary>
		public decimal/*(8.2)*/ ДлительностьКурса {get;set;}//Длительность курса
		///<summary>
		///Средний размер затрат на обучение одного сотрудника на данном курсе
		///</summary>
		public decimal/*(10.2)*/ ЗатратыНаОдногоОбучающегося {get;set;}//Затраты на одного обучающегося
		///<summary>
		///Вид выдаваемого документа после обучения
		///</summary>
		public V82.СправочникиСсылка.ДокументыОбОбразовании ВидДокументаОбОбразовании {get;set;}//Вид документа об образовании
		public V82.СправочникиСсылка.Валюты Валюта {get;set;}
		public bool ОтражатьВРегУчете {get;set;}//Отражать в рег учете
		
		public КурсыОбучения()
		{
		}
		
		public КурсыОбучения(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public КурсыОбучения(byte[] УникальныйИдентификатор,int Глубина)
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
					,_ParentIDRRef [Родитель]
					,_Folder [ЭтоГруппа]
					,_Description [Наименование]
					,_Fld1298 [ОписаниеКурса]
					,_Fld1299 [ДлительностьКурса]
					,_Fld1300 [ЗатратыНаОдногоОбучающегося]
					,_Fld1301RRef [ВидДокументаОбОбразовании]
					,_Fld1302RRef [Валюта]
					,_Fld1303 [ОтражатьВРегУчете]
					From _Reference81(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  -- and _Folder = 0x01  ";
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
							Родитель = new V82.СправочникиСсылка.КурсыОбучения((byte[])Читалка.GetValue(4),Глубина+1);
							ЭтоГруппа = ((byte[])Читалка.GetValue(5))[0]==0;
							Наименование = Читалка.GetString(6);
							if(!ЭтоГруппа)
							{
								ОписаниеКурса = Читалка.GetString(7);
								ДлительностьКурса = Читалка.GetDecimal(8);
								ЗатратыНаОдногоОбучающегося = Читалка.GetDecimal(9);
								ВидДокументаОбОбразовании = new V82.СправочникиСсылка.ДокументыОбОбразовании((byte[])Читалка.GetValue(10),Глубина+1);
								Валюта = new V82.СправочникиСсылка.Валюты((byte[])Читалка.GetValue(11),Глубина+1);
								ОтражатьВРегУчете = ((byte[])Читалка.GetValue(12))[0]==1;
							}
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
		
		public V82.СправочникиОбъект.КурсыОбучения  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.КурсыОбучения();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Наименование = Наименование;
			Объект.ОписаниеКурса = ОписаниеКурса;
			Объект.ДлительностьКурса = ДлительностьКурса;
			Объект.ЗатратыНаОдногоОбучающегося = ЗатратыНаОдногоОбучающегося;
			Объект.ВидДокументаОбОбразовании = ВидДокументаОбОбразовании;
			Объект.Валюта = Валюта;
			Объект.ОтражатьВРегУчете = ОтражатьВРегУчете;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.КурсыОбучения ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.КурсыОбучения)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.КурсыОбучения(УникальныйИдентификатор);
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