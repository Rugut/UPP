﻿Ext.define('Справочники.ГрафикиРаботы.ФормаЗаполнить',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:561px;height:411px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Помощник заполнения графика',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:386px;width:561px;height:25px;',
			items:
			[
				{
					text:'Назад',
				},
				'-',
				{
					text:'Далее',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Отмена',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:190px;top:0px;width:365px;height:386px;',
			height: 386,width: 365,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Способ заполнения графика',
			style: 'position:absolute;left:0px;top:6px;width:365px;height:27px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'Начать с:',
			style: 'position:absolute;left:16px;top:262px;width:58px;height:19px;text-align:left;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Настроить вручную',
			style: 'position:absolute;left:0px;top:345px;width:364px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Заполнить по шаблону:',
			style: 'position:absolute;left:0px;top:48px;width:364px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:79px;top:262px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'День начала отсчета периодичности сменного графика',
			style: 'position:absolute;left:79px;top:282px;width:232px;height:34px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:16px;top:209px;width:265px;height:43px;',
			height: 43,width: 265,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Вести учет вечерних часов',
			style: 'position:absolute;left:0px;top:23px;width:265px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вести учет ночных часов',
			style: 'position:absolute;left:0px;top:0px;width:265px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'radio',
			boxLabel: 'ДополнительныйСпособЗаполнения',
			style: 'position:absolute;left:0px;top:321px;width:365px;height:19px;',
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидГрафика',
			text: 'Тип графика:',
			style: 'position:absolute;left:0px;top:50px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипГрафика',
			style: 'position:absolute;left:92px;top:50px;width:149px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДлительностьРабочейНедели',
			text: 'Часов в неделе:',
			style: 'position:absolute;left:0px;top:76px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЧасовВНеделе',
			style: 'position:absolute;left:92px;top:76px;width:90px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Суммированный учет рабочего времени',
			style: 'position:absolute;left:4px;top:103px;width:360px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать праздничные дни',
			style: 'position:absolute;left:4px;top:171px;width:360px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Параметры графика',
			style: 'position:absolute;left:0px;top:6px;width:365px;height:27px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вести учет вечерних часов',
			style: 'position:absolute;left:4px;top:149px;width:360px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Вести учет ночных часов',
			style: 'position:absolute;left:4px;top:126px;width:360px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Неполное рабочее время',
			style: 'position:absolute;left:4px;top:194px;width:360px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сокращенная рабочая неделя',
			style: 'position:absolute;left:18px;top:238px;width:180px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Неполный рабочий день',
			style: 'position:absolute;left:18px;top:216px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрафикПолногоРабочегоВремени',
			style: 'position:absolute;left:144px;top:309px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Норма времени рассчитывается',
			style: 'position:absolute;left:18px;top:263px;width:199px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По этому графику',
			style: 'position:absolute;left:18px;top:288px;width:124px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По другому графику:',
			style: 'position:absolute;left:18px;top:309px;width:124px;height:19px;',
		},
					]
				},
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Расписание работы',
			style: 'position:absolute;left:3px;top:6px;width:362px;height:27px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНачалоНочныхЧасов',
			text: 'Начало ночных часов:',
			style: 'position:absolute;left:3px;top:338px;width:121px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачалоНочных',
			style: 'position:absolute;left:124px;top:338px;width:59px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНачалоДневныхЧасов',
			text: 'Начало дневных часов:',
			style: 'position:absolute;left:3px;top:281px;width:121px;height:19px;text-align:left;',
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
			tabBar:{hidden:true},
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
					text:'День недели',
					width:'97',
				},
				{
					text:'Часов за день',
					width:'80',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПолеВвода1',
			text: 'Перерывов в день:',
			style: 'position:absolute;left:0px;top:17px;width:98px;height:19px;text-align:left;',
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
					text:'День недели',
					width:'88',
				},
				{
					text:'Начало',
					width:'60',
				},
				{
					text:'Окончание',
					width:'57',
				},
				{
					text:'Перерыв',
					width:'44',
				},
				{
					text:'с',
					width:'47',
				},
				{
					text:'по',
					width:'47',
				},
				{
					text:'Перерыв',
					width:'101',
				},
				{
					text:'с',
					width:'49',
				},
				{
					text:'по',
					width:'49',
				},
				{
					text:'Перерыв',
					width:'57',
				},
				{
					text:'с',
					width:'49',
				},
				{
					text:'по',
					width:'49',
				},
				{
					text:'Перерыв',
					width:'59',
				},
				{
					text:'с',
					width:'49',
				},
				{
					text:'по',
					width:'49',
				},
				{
					text:'Перерыв',
					width:'58',
				},
				{
					text:'с',
					width:'49',
				},
				{
					text:'по',
					width:'49',
				},
				{
					text:'Часов за день',
					width:'43',
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
					text:'Номер дня',
					width:'71',
				},
				{
					text:'Смена',
					width:'151',
				},
				{
					text:'Часов в смене',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОтсчета1',
			text: 'Начать с:',
			style: 'position:absolute;left:215px;top:14px;width:51px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:9px;width:132px;height:24px;',
			items:
			[
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
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНачалоВечернихЧасов',
			text: 'Начало вечерних часов:',
			style: 'position:absolute;left:0px;top:4px;width:121px;height:19px;text-align:left;',
		},
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
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:12px;width:181px;height:374px;',
			height: 374,width: 181,
			tabBar:{hidden:true},
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