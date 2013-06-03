
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class МодернизацияОС:ДокументОбъект
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
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public V82.Перечисления/*Ссылка*/.ВидыСобытийОС ВидОперацийСОсновнымиСредствами {get;set;}//Вид операций с основными средствами
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.ОбъектыСтроительства ОбъектСтроительства {get;set;}//Объект строительства
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.СобытияОС Событие {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public V82.СправочникиСсылка.СобытияОС СобытиеРегл {get;set;}//Событие (регл)
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(15.2)*/ СтоимостьУУ {get;set;}//Стоимость по управленческому учету
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public decimal/*(15.2)*/ СтоимостьБУ {get;set;}//Стоимость БУ
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public decimal/*(15.2)*/ СтоимостьБУХоз {get;set;}//Стоимость БУ (Хоз. способ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public decimal/*(15.2)*/ СтоимостьНУ {get;set;}//Стоимость НУ
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public decimal/*(15.2)*/ СтоимостьНУХоз {get;set;}//Стоимость НУ (хоз. способ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public decimal/*(15.2)*/ СтоимостьПР {get;set;}//Стоимость (ПР)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public decimal/*(15.2)*/ СтоимостьПРХоз {get;set;}//Стоимость (ПР) (хоз. способ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(26)]
		public decimal/*(15.2)*/ СтоимостьВР {get;set;}//Стоимость (ВР)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(27)]
		public decimal/*(15.2)*/ СтоимостьВРХоз {get;set;}//Стоимость (ВР) (хоз. способ)
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(28)]
		public object СчетУчетаБУВнеоборотногоАктива {get;set;}//Счет учета БУ внеоборотного актива
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(29)]
		public object СчетУчетаНУВнеоборотногоАктива {get;set;}//Счет учета НУ внеоборотного актива
		[DataMember]
		[ProtoMember(30)]
		public object СчетУчетаЗатратПоАмортизационнойПремии {get;set;}//Счет учета затрат по амортизационной премии
		[DataMember]
		[ProtoMember(31)]
		public object СубконтоПоАмортизационнойПремии1 {get;set;}//Субконто по амортизационной премии1
		[DataMember]
		[ProtoMember(32)]
		public object СубконтоПоАмортизационнойПремии2 {get;set;}//Субконто по амортизационной премии2
		[DataMember]
		[ProtoMember(33)]
		public object СубконтоПоАмортизационнойПремии3 {get;set;}//Субконто по амортизационной премии3
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(34)]
		public decimal/*(15.2)*/ СтоимостьУСН {get;set;}//Стоимость УСН
		[DataMember]
		[ProtoMember(35)]
		public bool ВключатьАПВСоставРасходовПриОтраженииМодернизации {get;set;}//Включать амортизационную премию в состав расходов при отражении модернизации
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
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
						Insert Into _Document433(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld9582RRef
						,_Fld9583
						,_Fld9584RRef
						,_Fld9585RRef
						,_Fld9586RRef
						,_Fld9587
						,_Fld9588
						,_Fld9589
						,_Fld9590RRef
						,_Fld9591RRef
						,_Fld9592
						,_Fld9593
						,_Fld9594
						,_Fld9595
						,_Fld9596
						,_Fld9597
						,_Fld9598
						,_Fld9599
						,_Fld9600
						,_Fld9601RRef
						,_Fld9602RRef
						,_Fld9603RRef
						,_Fld9604RRef
						,_Fld9605RRef
						,_Fld9606RRef
						,_Fld9607
						,_Fld9608)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВидОперацийСОсновнымиСредствами
						,@Комментарий
						,@ОбъектСтроительства
						,@Организация
						,@Ответственный
						,@ОтражатьВБухгалтерскомУчете
						,@ОтражатьВНалоговомУчете
						,@ОтражатьВУправленческомУчете
						,@Событие
						,@СобытиеРегл
						,@СтоимостьУУ
						,@СтоимостьБУ
						,@СтоимостьБУХоз
						,@СтоимостьНУ
						,@СтоимостьНУХоз
						,@СтоимостьПР
						,@СтоимостьПРХоз
						,@СтоимостьВР
						,@СтоимостьВРХоз
						,@СчетУчетаБУВнеоборотногоАктива
						,@СчетУчетаНУВнеоборотногоАктива
						,@СчетУчетаЗатратПоАмортизационнойПремии
						,@СубконтоПоАмортизационнойПремии1
						,@СубконтоПоАмортизационнойПремии2
						,@СубконтоПоАмортизационнойПремии3
						,@СтоимостьУСН
						,@ВключатьАПВСоставРасходовПриОтраженииМодернизации)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document433
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld9582RRef	= @ВидОперацийСОсновнымиСредствами
						,_Fld9583	= @Комментарий
						,_Fld9584RRef	= @ОбъектСтроительства
						,_Fld9585RRef	= @Организация
						,_Fld9586RRef	= @Ответственный
						,_Fld9587	= @ОтражатьВБухгалтерскомУчете
						,_Fld9588	= @ОтражатьВНалоговомУчете
						,_Fld9589	= @ОтражатьВУправленческомУчете
						,_Fld9590RRef	= @Событие
						,_Fld9591RRef	= @СобытиеРегл
						,_Fld9592	= @СтоимостьУУ
						,_Fld9593	= @СтоимостьБУ
						,_Fld9594	= @СтоимостьБУХоз
						,_Fld9595	= @СтоимостьНУ
						,_Fld9596	= @СтоимостьНУХоз
						,_Fld9597	= @СтоимостьПР
						,_Fld9598	= @СтоимостьПРХоз
						,_Fld9599	= @СтоимостьВР
						,_Fld9600	= @СтоимостьВРХоз
						,_Fld9601RRef	= @СчетУчетаБУВнеоборотногоАктива
						,_Fld9602RRef	= @СчетУчетаНУВнеоборотногоАктива
						,_Fld9603RRef	= @СчетУчетаЗатратПоАмортизационнойПремии
						,_Fld9604RRef	= @СубконтоПоАмортизационнойПремии1
						,_Fld9605RRef	= @СубконтоПоАмортизационнойПремии2
						,_Fld9606RRef	= @СубконтоПоАмортизационнойПремии3
						,_Fld9607	= @СтоимостьУСН
						,_Fld9608	= @ВключатьАПВСоставРасходовПриОтраженииМодернизации
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ВидОперацийСОсновнымиСредствами", ВидОперацийСОсновнымиСредствами.Ключ());
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("ОтражатьВБухгалтерскомУчете", ОтражатьВБухгалтерскомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВНалоговомУчете", ОтражатьВНалоговомУчете);
					Команда.Parameters.AddWithValue("ОтражатьВУправленческомУчете", ОтражатьВУправленческомУчете);
					Команда.Parameters.AddWithValue("СтоимостьУУ", СтоимостьУУ);
					Команда.Parameters.AddWithValue("СтоимостьБУ", СтоимостьБУ);
					Команда.Parameters.AddWithValue("СтоимостьБУХоз", СтоимостьБУХоз);
					Команда.Parameters.AddWithValue("СтоимостьНУ", СтоимостьНУ);
					Команда.Parameters.AddWithValue("СтоимостьНУХоз", СтоимостьНУХоз);
					Команда.Parameters.AddWithValue("СтоимостьПР", СтоимостьПР);
					Команда.Parameters.AddWithValue("СтоимостьПРХоз", СтоимостьПРХоз);
					Команда.Parameters.AddWithValue("СтоимостьВР", СтоимостьВР);
					Команда.Parameters.AddWithValue("СтоимостьВРХоз", СтоимостьВРХоз);
					Команда.Parameters.AddWithValue("СчетУчетаБУВнеоборотногоАктива", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаНУВнеоборотногоАктива", Guid.Empty);
					Команда.Parameters.AddWithValue("СчетУчетаЗатратПоАмортизационнойПремии", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоПоАмортизационнойПремии1", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоПоАмортизационнойПремии2", Guid.Empty);
					Команда.Parameters.AddWithValue("СубконтоПоАмортизационнойПремии3", Guid.Empty);
					Команда.Parameters.AddWithValue("СтоимостьУСН", СтоимостьУСН);
					Команда.Parameters.AddWithValue("ВключатьАПВСоставРасходовПриОтраженииМодернизации", ВключатьАПВСоставРасходовПриОтраженииМодернизации);
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
					Команда.CommandText = @"Delete _Document433
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}