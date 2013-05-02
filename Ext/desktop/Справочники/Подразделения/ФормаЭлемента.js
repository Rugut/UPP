Ext.define('Справочники.Подразделения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:538px;height:472px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подразделения',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:404px;top:33px;width:24px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:430px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:91px;top:33px;width:300px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:538px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
				{
					text:'Редактировать код',
				},
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
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Настройка доступа',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:447px;width:538px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:8px;top:57px;width:81px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководительТекст',
			text: '',
			style: 'position:absolute;left:91px;top:57px;width:427px;height:34px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидПодразделения',
			text: 'Вид:',
			style: 'position:absolute;left:8px;top:93px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПодразделения',
			style: 'position:absolute;left:93px;top:93px;width:295px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидЦФО',
			text: 'Вид ЦФО:',
			style: 'position:absolute;left:8px;top:120px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЦФО',
			style: 'position:absolute;left:93px;top:120px;width:295px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОсновнойПроект',
			text: 'Основной проект:',
			style: 'position:absolute;left:8px;top:143px;width:84px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойПроект',
			style: 'position:absolute;left:93px;top:143px;width:295px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:186px;width:522px;height:253px;',
			height: 253,width: 522,
			items:
			[
				{
					title:'Соответствие подразделений',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:23px;width:510px;height:206px;',
			height: 206,width: 510,
			columns:
			[
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'120',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Подразделения/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Организация',
					},
					{
						name:'ПодразделениеОрганизации',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСоответствиеПодразделений',
			text: 'Соответствие подразделениям организаций',
			style: 'position:absolute;left:6px;top:6px;width:510px;height:15px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:257px;top:26px;width:257px;height:201px;',
			height: 201,width: 257,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Принадлежность',
					width:'25',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'120',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Подразделения/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Принадлежность',
					},
					{
						name:'Категория',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:26px;width:247px;height:201px;',
			height: 201,width: 247,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Свойство',
					width:'120',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'120',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Подразделения/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Свойство',
					},
					{
						name:'Значение',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:63px;width:247px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:257px;top:63px;width:247px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:170px;width:522px;height:16px;',
			height: 16,width: 522,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});