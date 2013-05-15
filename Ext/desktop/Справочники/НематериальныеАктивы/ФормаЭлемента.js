Ext.define('Справочники.НематериальныеАктивы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:441px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Нематериальные активы и расходы на НИОКР',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:410px;top:56px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			style: 'position:absolute;left:452px;top:56px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:56px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:56px;width:312px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Родитель',
			style: 'position:absolute;left:94px;top:33px;width:398px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:83px;width:84px;height:27px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:94px;top:83px;width:398px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидНМА',
			text: 'Вид НМА:',
			style: 'position:absolute;left:14px;top:176px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидНМА',
			style: 'position:absolute;left:152px;top:176px;width:340px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАмортизационнаяГруппа',
			text: 'Амортизационная группа:',
			style: 'position:absolute;left:14px;top:199px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АмортизационнаяГруппа',
			style: 'position:absolute;left:152px;top:199px;width:340px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидОбъектаУчета',
			text: 'Вид объекта учета:',
			style: 'position:absolute;left:14px;top:153px;width:136px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидОбъектаУчета',
			style: 'position:absolute;left:152px;top:153px;width:340px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Характеристики',
			style: 'position:absolute;left:8px;top:131px;width:484px;height:17px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:225px;width:484px;height:183px;',
			height: 183,width: 484,
			items:
			[
				{
					title:'Прочее',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ПрочиеСведения',
			style: 'position:absolute;left:6px;top:24px;width:470px;height:133px;',
		},
		{
			xtype: 'fieldset',
			title: 'Прочие сведения',
			style: 'position:absolute;left:6px;top:6px;width:470px;height:16px;',
		},
					]
				},
				{
					title:'Свойства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:35px;width:470px;height:122px;',
			height: 122,width: 470,
			columns:
			[
				{
					text:'',
					width:'21',
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
					width:'240',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НематериальныеАктивы/ВыбратьПоСсылке/100'},
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
					]
				},
				{
					title:'Категории',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:35px;width:470px;height:122px;',
			height: 122,width: 470,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'188',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НематериальныеАктивы/ВыбратьПоСсылке/100'},
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
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:416px;width:500px;height:25px;',
			dock: 'bottom',
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
	]
});