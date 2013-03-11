Ext.define('Справочники.СпособыОтраженияРасходовПоАмортизации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 281,width: 604,
	iconCls: 'bogus',
	title: 'Способы отражения расходов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:588px;height:240px;',
			height: 240,width: 588,
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
				{
					text:'Организация',
				},
				{
					text:'СпособРаспределенияЗатратНаВыпуск',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
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