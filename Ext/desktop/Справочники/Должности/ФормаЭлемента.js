Ext.define('Справочники.Должности.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:446px;height:424px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Должность',
	
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
			name: 'Код',
			style: 'position:absolute;left:358px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:102px;top:33px;width:212px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:446px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Редактировать код',
				},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:399px;width:446px;height:25px;',
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
					text:'OK',
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
			style: 'position:absolute;left:8px;top:57px;width:430px;height:334px;',
			height: 334,width: 430,
			items:
			[
				{
					title:'Описание должности',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Требования',
			style: 'position:absolute;left:6px;top:25px;width:416px;height:70px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТребования',
			text: 'Требования:',
			style: 'position:absolute;left:6px;top:6px;width:416px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОбязанности',
			text: 'Обязанности:',
			style: 'position:absolute;left:6px;top:100px;width:416px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Обязанности',
			style: 'position:absolute;left:6px;top:119px;width:416px;height:70px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'Условия',
			style: 'position:absolute;left:6px;top:213px;width:416px;height:70px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУсловия',
			text: 'Условия:',
			style: 'position:absolute;left:6px;top:194px;width:416px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАнкетаРезюмеКандидата',
			text: 'Анкета резюме кандидата:',
			style: 'position:absolute;left:6px;top:289px;width:138px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АнкетаРезюмеКандидата',
			style: 'position:absolute;left:150px;top:289px;width:272px;height:19px;',
		},
					]
				},
				{
					title:'Компетенции',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:416px;height:249px;',
			height: 249,width: 416,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Компетенция',
					width:'181',
					dataIndex:'Компетенция',
					flex:1,
				},
				{
					text:'Должность',
					width:'0',
					dataIndex:'Должность',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Должности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Компетенция',
					},
					{
						name:'Должность',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:416px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
					]
				},
			]
		},
	]
});