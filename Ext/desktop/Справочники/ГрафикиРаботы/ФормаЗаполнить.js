Ext.define('Справочники.ГрафикиРаботы.ФормаЗаполнить',
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
			xtype: 'itemselector',
			style: 'position:absolute;left:16px;top:83px;width:265px;height:121px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 84,
			height: 19,
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
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Заполнить по шаблону:',
			style: 'position:absolute;left:0px;top:48px;width:364px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'ДополнительныйСпособЗаполнения',
			style: 'position:absolute;left:0px;top:321px;width:365px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Настроить вручную',
			style: 'position:absolute;left:0px;top:345px;width:364px;height:19px;',
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
			xtype: 'label',
			name: 'НадписьВидГрафика',
			text: 'Тип графика:',
			style: 'position:absolute;left:0px;top:50px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ТипГрафика',
			width: 149,
			height: 19,
			style: 'position:absolute;left:92px;top:50px;width:149px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДлительностьРабочейНедели',
			text: 'Часов в неделе:',
			style: 'position:absolute;left:0px;top:76px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
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
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ГрафикПолногоРабочегоВремени',
			width: 220,
			height: 19,
			style: 'position:absolute;left:144px;top:309px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Норма времени рассчитывается',
			style: 'position:absolute;left:18px;top:263px;width:199px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Неполный рабочий день',
			style: 'position:absolute;left:18px;top:216px;width:180px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сокращенная рабочая неделя',
			style: 'position:absolute;left:18px;top:238px;width:180px;height:19px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
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
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачалоНочных',
			width: 59,
			height: 19,
			style: 'position:absolute;left:124px;top:338px;width:59px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНачалоДневныхЧасов',
			text: 'Начало дневных часов:',
			style: 'position:absolute;left:3px;top:281px;width:121px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачалоДневных',
			width: 59,
			height: 19,
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
					dataIndex:'ДеньНедели',
					flex:1,
				},
				{
					text:'Часов за день',
					width:'80',
					dataIndex:'ЧасовЗаДень',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрафикиРаботы/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ДеньНедели',
					},
					{
						name:'ЧасовЗаДень',
					},
				]
			},
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
					dataIndex:'ДеньНедели',
					flex:1,
				},
				{
					text:'Начало',
					width:'60',
					dataIndex:'Начало',
					flex:1,
				},
				{
					text:'Окончание',
					width:'57',
					dataIndex:'Окончание',
					flex:1,
				},
				{
					text:'Перерыв',
					width:'44',
					dataIndex:'Перерыв1',
					flex:1,
				},
				{
					text:'с',
					width:'47',
					dataIndex:'НачалоПерерыва1',
					flex:1,
				},
				{
					text:'по',
					width:'47',
					dataIndex:'ОкончаниеПерерыва1',
					flex:1,
				},
				{
					text:'Перерыв',
					width:'101',
					dataIndex:'Перерыв2',
					flex:1,
				},
				{
					text:'с',
					width:'49',
					dataIndex:'НачалоПерерыва2',
					flex:1,
				},
				{
					text:'по',
					width:'49',
					dataIndex:'ОкончаниеПерерыва2',
					flex:1,
				},
				{
					text:'Перерыв',
					width:'57',
					dataIndex:'Перерыв3',
					flex:1,
				},
				{
					text:'с',
					width:'49',
					dataIndex:'НачалоПерерыва3',
					flex:1,
				},
				{
					text:'по',
					width:'49',
					dataIndex:'ОкончаниеПерерыва3',
					flex:1,
				},
				{
					text:'Перерыв',
					width:'59',
					dataIndex:'Перерыв4',
					flex:1,
				},
				{
					text:'с',
					width:'49',
					dataIndex:'НачалоПерерыва4',
					flex:1,
				},
				{
					text:'по',
					width:'49',
					dataIndex:'ОкончаниеПерерыва4',
					flex:1,
				},
				{
					text:'Перерыв',
					width:'58',
					dataIndex:'Перерыв5',
					flex:1,
				},
				{
					text:'с',
					width:'49',
					dataIndex:'НачалоПерерыва5',
					flex:1,
				},
				{
					text:'по',
					width:'49',
					dataIndex:'ОкончаниеПерерыва5',
					flex:1,
				},
				{
					text:'Часов за день',
					width:'43',
					dataIndex:'ИтогоЗаДень',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрафикиРаботы/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ДеньНедели',
					},
					{
						name:'Начало',
					},
					{
						name:'Окончание',
					},
					{
						name:'Перерыв1',
					},
					{
						name:'НачалоПерерыва1',
					},
					{
						name:'ОкончаниеПерерыва1',
					},
					{
						name:'Перерыв2',
					},
					{
						name:'НачалоПерерыва2',
					},
					{
						name:'ОкончаниеПерерыва2',
					},
					{
						name:'Перерыв3',
					},
					{
						name:'НачалоПерерыва3',
					},
					{
						name:'ОкончаниеПерерыва3',
					},
					{
						name:'Перерыв4',
					},
					{
						name:'НачалоПерерыва4',
					},
					{
						name:'ОкончаниеПерерыва4',
					},
					{
						name:'Перерыв5',
					},
					{
						name:'НачалоПерерыва5',
					},
					{
						name:'ОкончаниеПерерыва5',
					},
					{
						name:'ИтогоЗаДень',
					},
				]
			},
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоПерерывов',
			style: 'position:absolute;left:106px;top:17px;width:33px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:6px;width:360px;height:3px;',
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
					dataIndex:'НомерДня',
					flex:1,
				},
				{
					text:'Смена',
					width:'151',
					dataIndex:'Смена',
					flex:1,
				},
				{
					text:'Часов в смене',
					width:'100',
					dataIndex:'ЧасовВСмене',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрафикиРаботы/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерДня',
					},
					{
						name:'Смена',
					},
					{
						name:'ЧасовВСмене',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОтсчета1',
			text: 'Начать с:',
			style: 'position:absolute;left:215px;top:14px;width:51px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаСменного',
			width: 84,
			height: 19,
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
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачалоВечерних',
			width: 59,
			height: 19,
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
					xtype: 'tbfill'
				},
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
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:386px;width:561px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
	]
});