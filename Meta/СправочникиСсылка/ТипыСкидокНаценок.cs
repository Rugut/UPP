
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
	public partial class ТипыСкидокНаценок:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("10d02b81-c725-40ba-bc12-85b61427b0c4");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012009.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*25*/ Наименование {get;set;}
		///<summary>
		///(Общ) Валюта, в которой задана скидка 
		///</summary>
		public V82.СправочникиСсылка.Валюты Валюта {get;set;}
		///<summary>
		///Удалить (Общ) Истина -  скидка действует для всех номенклатурных позиций, иначе - только для заданных в регистре сведений Скидки
		///</summary>
		public bool ДляВсейНоменклатуры {get;set;}//Для всей номенклатуры
		///<summary>
		///(Общ) Процент скидки по умолчанию (сумма или процент)
		///</summary>
		public decimal/*(15.2)*/ ПроцентСкидкиНаценки {get;set;}//Процент скидки наценки
		///<summary>
		///(Общ) Значение условия скидки
		///</summary>
		public object ЗначениеУсловия {get;set;}//Значение условия
		///<summary>
		///(Общее время начала действия скидки)
		///</summary>
		public DateTime ОбщееВремяНачала {get;set;}//Общее время начала
		///<summary>
		///(Общее время окончания действия скидки)
		///</summary>
		public DateTime ОбщееВремяОкончания {get;set;}//Общее время окончания
		///<summary>
		///(Общ)
		///</summary>
		public decimal/*(15.2)*/ ОграничениеСкидкиНаценки {get;set;}//Ограничение скидки наценки
		///<summary>
		///(Общ) Условие скидки-наценки
		///</summary>
		public V82.Перечисления/*Ссылка*/.УсловияСкидкиНаценки Условие {get;set;}
		public V82.СправочникиСсылка.Качество Качество {get;set;}
		public bool ДляВсехПолучателей {get;set;}//Для всех получателей
		public bool ПоДнямНедели {get;set;}//По дням недели
		public V82.Перечисления/*Ссылка*/.ВидыСкидок ВидСкидки {get;set;}//Вид скидки
		
		public ТипыСкидокНаценок()
		{
		}
		
		public ТипыСкидокНаценок(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public ТипыСкидокНаценок(byte[] УникальныйИдентификатор,int Глубина)
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
					,_Fld2086RRef [Валюта]
					,_Fld2087 [ДляВсейНоменклатуры]
					,_Fld2088 [ПроцентСкидкиНаценки]
					,_Fld2091_TYPE [ЗначениеУсловия_Тип],_Fld2091_RRRef [ЗначениеУсловия],_Fld2091_RTRef [ЗначениеУсловия_Вид]
					,_Fld2092 [ОбщееВремяНачала]
					,_Fld2093 [ОбщееВремяОкончания]
					,_Fld2094 [ОграничениеСкидкиНаценки]
					,_Fld2095RRef [Условие]
					,_Fld2096RRef [Качество]
					,_Fld2097 [ДляВсехПолучателей]
					,_Fld2098 [ПоДнямНедели]
					,_Fld2099RRef [ВидСкидки]
					From _Reference180(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  ";
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
							Валюта = new V82.СправочникиСсылка.Валюты((byte[])Читалка.GetValue(6),Глубина+1);
							ДляВсейНоменклатуры = ((byte[])Читалка.GetValue(7))[0]==1;
							ПроцентСкидкиНаценки = Читалка.GetDecimal(8);
							ОбщееВремяНачала = Читалка.GetDateTime(12);
							ОбщееВремяОкончания = Читалка.GetDateTime(13);
							ОграничениеСкидкиНаценки = Читалка.GetDecimal(14);
							Условие = V82.Перечисления/*Ссылка*/.УсловияСкидкиНаценки.ПустаяСсылка.Получить((byte[])Читалка.GetValue(15));
							Качество = new V82.СправочникиСсылка.Качество((byte[])Читалка.GetValue(16),Глубина+1);
							ДляВсехПолучателей = ((byte[])Читалка.GetValue(17))[0]==1;
							ПоДнямНедели = ((byte[])Читалка.GetValue(18))[0]==1;
							ВидСкидки = V82.Перечисления/*Ссылка*/.ВидыСкидок.ПустаяСсылка.Получить((byte[])Читалка.GetValue(19));
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
		
		public V82.СправочникиОбъект.ТипыСкидокНаценок  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ТипыСкидокНаценок();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Валюта = Валюта;
			Объект.ДляВсейНоменклатуры = ДляВсейНоменклатуры;
			Объект.ПроцентСкидкиНаценки = ПроцентСкидкиНаценки;
			Объект.ЗначениеУсловия = ЗначениеУсловия;
			Объект.ОбщееВремяНачала = ОбщееВремяНачала;
			Объект.ОбщееВремяОкончания = ОбщееВремяОкончания;
			Объект.ОграничениеСкидкиНаценки = ОграничениеСкидкиНаценки;
			Объект.Условие = Условие;
			Объект.Качество = Качество;
			Объект.ДляВсехПолучателей = ДляВсехПолучателей;
			Объект.ПоДнямНедели = ПоДнямНедели;
			Объект.ВидСкидки = ВидСкидки;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ТипыСкидокНаценок ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ТипыСкидокНаценок)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ТипыСкидокНаценок(УникальныйИдентификатор);
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