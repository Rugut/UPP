Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаПодбораСчетовФактур',
	{
	extend: 'Ext.window.Window',
	height: 293,width: 577,
	iconCls: 'bogus',
	title: 'Подбор счетов-фактур',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновноеСредство',
			style: 'position:absolute;left:118px;top:8px;width:248px;height:19px;',
		},
	]
});