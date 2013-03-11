Ext.define('Документы.ВозвратНаРаботуОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 404,width: 516,
	iconCls: 'bogus',
	title: 'Возврат на работу в организацию',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:516px;height:25px;',
			items:
			[
				{
					text:'ОткрытьКатегории',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ОткрытьСвойства',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель4',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:353px;width:414px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:148px;width:500px;height:160px;',
			height: 160,width: 500,
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
					text:'ДатаС',
				},
				{
					text:'ЗаниматьСтавку',
				},
				{
					text:'Сторно',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:124px;width:500px;height:24px;',
			items:
			[
				{
					text:'СписокРаботников',
				},
				{
					text:'Действие15',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие13',
				},
				{
					text:'Добавить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подбор',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие16',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие17',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:268px;top:379px;width:248px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Записать',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:295px;top:314px;width:83px;height:33px;',
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
			style: 'position:absolute;left:379px;top:314px;width:129px;height:33px;',
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
			style: 'position:absolute;left:0px;top:379px;width:268px;height:25px;',
			items:
			[
				{
					text:'СписокСотрудников',
				},
				{
					text:'ТекущийСотрудник',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Исправить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОтменитьИсправление',
				},
				{
					text:'ВесьДокумент',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:30px;top:224px;width:389px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие9',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие10',
				},
				{
					text:'Изменить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
				{
					text:'Удалить',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие4',
				},
			]
		},
	]
});