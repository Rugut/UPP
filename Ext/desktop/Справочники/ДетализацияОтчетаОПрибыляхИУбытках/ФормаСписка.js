Ext.define('Справочники.ДетализацияОтчетаОПрибыляхИУбытках.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 356,
	iconCls: 'bogus',
	title: 'Детализация отчета о прибылях и убытках',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:340px;height:280px;',
			height: 280,width: 340,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:356px;height:25px;',
			items:
			[
			]
		},
	]
});