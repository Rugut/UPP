Ext.define('Справочники.ИсточникиИнформацииПриОбращенииПокупателей.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 488,
	iconCls: 'bogus',
	title: 'Источники информации при обращении покупателей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:472px;height:280px;',
			height: 280,width: 472,
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
					text:'ПериодАктуальностиИнформацииПослеСобытия',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:488px;height:25px;',
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