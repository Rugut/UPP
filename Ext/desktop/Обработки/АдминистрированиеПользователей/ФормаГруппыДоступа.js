Ext.define('Обработки.АдминистрированиеПользователей.ФормаГруппыДоступа',
	{
	extend: 'Ext.window.Window',
	height: 332,width: 627,
	iconCls: 'bogus',
	title: 'Группы доступа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:627px;height:25px;',
			items:
			[
				{
					text:'ПраваДоступаПользователейКоВсемуСправочнику',
				},
				{
					text:'Права',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ПраваДоступаПользователейКТекущемуЭлементу',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:611px;height:291px;',
			height: 291,width: 611,
			items:
			[
				{
					title:'ГруппыДоступаКонтрагентов',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:597px;height:259px;',
			height: 259,width: 597,
			items:
			[
				{
					title:'ГруппыДоступаКонтрагентов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:150px;top:0px;width:447px;height:259px;',
			height: 259,width: 447,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:144px;height:259px;',
			height: 259,width: 144,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
					]
				},
				{
					title:'НастройкаНедоступна',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'ГруппыДоступаФизическихЛиц',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:603px;height:259px;',
			height: 259,width: 603,
			items:
			[
				{
					title:'ГруппыДоступаФизическихЛиц',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:150px;top:0px;width:447px;height:259px;',
			height: 259,width: 447,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:144px;height:259px;',
			height: 259,width: 144,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
					]
				},
				{
					title:'НастройкаНедоступна',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'ГруппыЗаявокКандидатов',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:6px;width:603px;height:261px;',
			height: 261,width: 603,
			items:
			[
				{
					title:'ГруппыЗаявокКандидатов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:156px;top:0px;width:447px;height:258px;',
			height: 258,width: 447,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:0px;width:144px;height:258px;',
			height: 258,width: 144,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
					]
				},
				{
					title:'НастройкаНедоступна',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
	]
});