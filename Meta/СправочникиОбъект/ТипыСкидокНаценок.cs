
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ТипыСкидокНаценок:СправочникОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*25*/ Наименование {get;set;}
		///<summary>
		///(Общ) Валюта, в которой задана скидка 
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public V82.СправочникиСсылка.Валюты Валюта {get;set;}
		///<summary>
		///Удалить (Общ) Истина -  скидка действует для всех номенклатурных позиций, иначе - только для заданных в регистре сведений Скидки
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public bool ДляВсейНоменклатуры {get;set;}//Для всей номенклатуры
		///<summary>
		///(Общ) Процент скидки по умолчанию (сумма или процент)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public decimal/*(15.2)*/ ПроцентСкидкиНаценки {get;set;}//Процент скидки наценки
		///<summary>
		///(Общ) Значение условия скидки
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public object ЗначениеУсловия {get;set;}//Значение условия
		///<summary>
		///(Общее время начала действия скидки)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public DateTime ОбщееВремяНачала {get;set;}//Общее время начала
		///<summary>
		///(Общее время окончания действия скидки)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public DateTime ОбщееВремяОкончания {get;set;}//Общее время окончания
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(15.2)*/ ОграничениеСкидкиНаценки {get;set;}//Ограничение скидки наценки
		///<summary>
		///(Общ) Условие скидки-наценки
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.Перечисления/*Ссылка*/.УсловияСкидкиНаценки Условие {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Качество Качество {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public bool ДляВсехПолучателей {get;set;}//Для всех получателей
		[DataMember]
		[ProtoMember(18)]
		public bool ПоДнямНедели {get;set;}//По дням недели
		[DataMember]
		[ProtoMember(19)]
		public V82.Перечисления/*Ссылка*/.ВидыСкидок ВидСкидки {get;set;}//Вид скидки
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для справочников.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Reference268(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld3946RRef
						,_Fld3947
						,_Fld3948
						,_Fld3950
						,_Fld3951
						,_Fld3952
						,_Fld3953RRef
						,_Fld3954RRef
						,_Fld3955
						,_Fld3956
						,_Fld3957RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@Валюта
						,@ДляВсейНоменклатуры
						,@ПроцентСкидкиНаценки
						,@ОбщееВремяНачала
						,@ОбщееВремяОкончания
						,@ОграничениеСкидкиНаценки
						,@Условие
						,@Качество
						,@ДляВсехПолучателей
						,@ПоДнямНедели
						,@ВидСкидки)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference268
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld3946RRef	= @Валюта
						,_Fld3947	= @ДляВсейНоменклатуры
						,_Fld3948	= @ПроцентСкидкиНаценки
						,_Fld3950	= @ОбщееВремяНачала
						,_Fld3951	= @ОбщееВремяОкончания
						,_Fld3952	= @ОграничениеСкидкиНаценки
						,_Fld3953RRef	= @Условие
						,_Fld3954RRef	= @Качество
						,_Fld3955	= @ДляВсехПолучателей
						,_Fld3956	= @ПоДнямНедели
						,_Fld3957RRef	= @ВидСкидки
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Валюта", Валюта.Ссылка);
					Команда.Parameters.AddWithValue("ДляВсейНоменклатуры", ДляВсейНоменклатуры);
					Команда.Parameters.AddWithValue("ПроцентСкидкиНаценки", ПроцентСкидкиНаценки);
					Команда.Parameters.AddWithValue("ОбщееВремяНачала", ОбщееВремяНачала);
					Команда.Parameters.AddWithValue("ОбщееВремяОкончания", ОбщееВремяОкончания);
					Команда.Parameters.AddWithValue("ОграничениеСкидкиНаценки", ОграничениеСкидкиНаценки);
					Команда.Parameters.AddWithValue("Условие", Условие.Ключ());
					Команда.Parameters.AddWithValue("Качество", Качество.Ссылка);
					Команда.Parameters.AddWithValue("ДляВсехПолучателей", ДляВсехПолучателей);
					Команда.Parameters.AddWithValue("ПоДнямНедели", ПоДнямНедели);
					Команда.Parameters.AddWithValue("ВидСкидки", ВидСкидки.Ключ());
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Reference268
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}