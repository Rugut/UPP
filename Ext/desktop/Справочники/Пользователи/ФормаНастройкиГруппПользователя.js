Ext.define('Справочники.Пользователи.ФормаНастройкиГруппПользователя',
	{
	extend: 'Ext.window.Window',
	height: 425,width: 326,
	iconCls: 'bogus',
	title: 'Группы, в которые входит пользователь',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:400px;width:326px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:28px;width:310px;height:364px;',
			height: 364,width: 310,
			columns:
			[
				{
					text:'ГруппаПользователей',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:14px;top:13px;width:105px;height:24px;',
			items:
			[
				{
					text:'ПраваДоступа',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});