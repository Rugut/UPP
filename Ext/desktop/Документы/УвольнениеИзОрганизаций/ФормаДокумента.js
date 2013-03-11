Ext.define('Документы.УвольнениеИзОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 463,width: 565,
	iconCls: 'bogus',
	title: 'Увольнение из организации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:565px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Подменю',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:412px;width:461px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:124px;width:549px;height:24px;',
			items:
			[
				{
					text:'Скопировать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Добавить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Подбор',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'СписокРаботников',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:148px;width:549px;height:220px;',
			height: 220,width: 549,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТабельныйНомерСтрока',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'ДатаУвольнения',
				},
				{
					text:'СтатьяТКРФ',
				},
				{
					text:'ОснованиеУвольнения',
				},
				{
					text:'ПрекращатьСтандартныеВычеты',
				},
				{
					text:'ПризнакКомпенсацииОтпуска',
				},
				{
					text:'ПорядокРасчетаОтпуска',
				},
				{
					text:'ДнейЧасовКомпенсацииУдержанияОтпуска',
				},
				{
					text:'РабочийГодС',
				},
				{
					text:'РабочийГодПо',
				},
				{
					text:'Сторно',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:268px;top:438px;width:297px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительOK',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:344px;top:374px;width:83px;height:33px;',
			height: 33,width: 83,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:428px;top:374px;width:129px;height:33px;',
			height: 33,width: 129,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:438px;width:268px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'СписокСотрудников',
				},
				{
					text:'Исправить',
				},
				{
					text:'ТекущийСотрудник',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ВесьДокумент',
				},
				{
					text:'ОтменитьИсправление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:72px;top:269px;width:389px;height:24px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Изменить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Удалить',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие12',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие13',
				},
			]
		},
	]
});