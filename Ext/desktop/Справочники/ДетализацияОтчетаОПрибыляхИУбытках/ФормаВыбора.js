Ext.define('Справочники.ДетализацияОтчетаОПрибыляхИУбытках.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:436px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'81',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:436px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});