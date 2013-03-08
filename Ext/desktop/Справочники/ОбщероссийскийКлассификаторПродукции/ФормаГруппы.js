Ext.define('Справочники.ОбщероссийскийКлассификаторПродукции.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 160,width: 400,
	iconCls: 'bogus',
	title: 'Группа Общероссийский классификатор продукции',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:115px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:115px;top:58px;width:277px;height:43px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрольноеЧисло',
			style: 'position:absolute;left:308px;top:33px;width:33px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:115px;top:108px;width:277px;height:19px;',
		},
	]
});