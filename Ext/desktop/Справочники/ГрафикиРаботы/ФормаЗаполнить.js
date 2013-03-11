Ext.define('Справочники.ГрафикиРаботы.ФормаЗаполнить',
	{
	extend: 'Ext.window.Window',
	height: 411,width: 561,
	iconCls: 'bogus',
	title: 'Помощник заполнения графика',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:386px;width:561px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'Назад',
				},
				{
					text:'Действие',
				},
				{
					text:'Далее',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:190px;top:0px;width:365px;height:386px;',
			height: 386,width: 365,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:79px;top:262px;width:84px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:16px;top:209px;width:265px;height:43px;',
			height: 43,width: 265,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипГрафика',
			style: 'position:absolute;left:92px;top:50px;width:149px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЧасовВНеделе',
			style: 'position:absolute;left:92px;top:76px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрафикПолногоРабочегоВремени',
			style: 'position:absolute;left:144px;top:309px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоНочных',
			style: 'position:absolute;left:124px;top:338px;width:59px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоДневных',
			style: 'position:absolute;left:124px;top:281px;width:59px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:3px;top:41px;width:360px;height:219px;',
			height: 219,width: 360,
			items:
			[
				{
					title:'Обычный',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:1px;top:11px;width:180px;height:150px;',
			height: 150,width: 180,
			columns:
			[
				{
					text:'ДеньНедели',
				},
				{
					text:'ЧасовЗаДень',
				},
			]
		},
					]
				},
				{
					title:'СУчетомНочных',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:38px;width:360px;height:167px;',
			height: 167,width: 360,
			columns:
			[
				{
					text:'ДеньНедели',
				},
				{
					text:'Начало',
				},
				{
					text:'Окончание',
				},
				{
					text:'Перерыв1',
				},
				{
					text:'НачалоПерерыва1',
				},
				{
					text:'ОкончаниеПерерыва1',
				},
				{
					text:'Перерыв2',
				},
				{
					text:'НачалоПерерыва2',
				},
				{
					text:'ОкончаниеПерерыва2',
				},
				{
					text:'Перерыв3',
				},
				{
					text:'НачалоПерерыва3',
				},
				{
					text:'ОкончаниеПерерыва3',
				},
				{
					text:'Перерыв4',
				},
				{
					text:'НачалоПерерыва4',
				},
				{
					text:'ОкончаниеПерерыва4',
				},
				{
					text:'Перерыв5',
				},
				{
					text:'НачалоПерерыва5',
				},
				{
					text:'ОкончаниеПерерыва5',
				},
				{
					text:'ИтогоЗаДень',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоПерерывов',
			style: 'position:absolute;left:106px;top:17px;width:33px;height:19px;',
		},
					]
				},
				{
					title:'Сменный',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:38px;width:360px;height:167px;',
			height: 167,width: 360,
			columns:
			[
				{
					text:'НомерДня',
				},
				{
					text:'Смена',
				},
				{
					text:'ЧасовВСмене',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:9px;width:132px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаСменного',
			style: 'position:absolute;left:276px;top:14px;width:84px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:3px;top:306px;width:190px;height:23px;',
			height: 23,width: 190,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоВечерних',
			style: 'position:absolute;left:121px;top:4px;width:59px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:387px;width:561px;height:24px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:12px;width:181px;height:374px;',
			height: 374,width: 181,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
	]
});