Ext.define('Справочники.ТиповыеАнкеты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:445px;height:470px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Типовая анкета',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:316px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			style: 'position:absolute;left:358px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:95px;top:33px;width:217px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:445px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Рассылка',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:166px;width:430px;height:272px;',
			height: 272,width: 430,
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Предназначена для загрузки данных в справочник "Физические лица"',
			style: 'position:absolute;left:6px;top:67px;width:416px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Предназначена для адресной рассылки',
			style: 'position:absolute;left:6px;top:30px;width:416px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидАнкеты',
			text: 'Вид анкеты:',
			style: 'position:absolute;left:6px;top:6px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидАнкеты',
			style: 'position:absolute;left:86px;top:6px;width:336px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заполнять анкету данными',
			style: 'position:absolute;left:6px;top:49px;width:416px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСекундОтвета',
			text: 'Секунд ответа:',
			style: 'position:absolute;left:5px;top:90px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СекундОтвета',
			style: 'position:absolute;left:86px;top:90px;width:46px;height:19px;',
		},
					]
				},
				{
					title:'Состав вопросов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:166px;width:416px;height:80px;',
			height: 80,width: 416,
			columns:
			[
				{
					text:'Раздел',
					width:'80',
					dataIndex:'Раздел',
					flex:1,
				},
				{
					text:'№',
					width:'27',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Вопрос',
					width:'227',
					dataIndex:'Вопрос',
					flex:1,
				},
				{
					text:'Обязательный',
					width:'80',
					dataIndex:'Обязательный',
					flex:1,
				},
				{
					text:'Вес вопроса',
					width:'100',
					dataIndex:'ВесВопроса',
					flex:1,
				},
				{
					text:'Секунд ответа',
					width:'100',
					dataIndex:'СекундОтвета',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТиповыеАнкеты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Раздел',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Вопрос',
					},
					{
						name:'Обязательный',
					},
					{
						name:'ВесВопроса',
					},
					{
						name:'СекундОтвета',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:142px;width:416px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:416px;height:74px;',
			height: 74,width: 416,
			columns:
			[
				{
					text:'Код',
					width:'80',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Раздел',
					width:'234',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТиповыеАнкеты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Вопросы',
			style: 'position:absolute;left:6px;top:126px;width:416px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Разделы',
			style: 'position:absolute;left:6px;top:6px;width:416px;height:16px;',
		},
					]
				},
				{
					title:'Макет печатной формы анкеты',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Заголовок:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеАнкеты',
			style: 'position:absolute;left:95px;top:57px;width:343px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Вступление:',
			style: 'position:absolute;left:8px;top:82px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Вступление',
			style: 'position:absolute;left:95px;top:82px;width:343px;height:80px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:445px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Ввести на основании)',
				},
					]
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Редактировать код',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});