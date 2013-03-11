Ext.define('Справочники.ДетализацияОтчетаОПрибыляхИУбытках.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 436,
	iconCls: 'bogus',
	title: 'Справочник Детализация отчета о прибылях и убытках',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:420px;height:259px;',
			height: 259,width: 420,
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
			style: 'position:absolute;left:0px;top:0px;width:436px;height:25px;',
			items:
			[
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