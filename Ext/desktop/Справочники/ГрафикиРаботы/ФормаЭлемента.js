Ext.define('Справочники.ГрафикиРаботы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 530,width: 813,
	iconCls: 'bogus',
	title: 'Графики работы',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:95px;top:8px;width:368px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗаполнитьГрафик',
			text: 'Заполнить график',
			style: 'position:absolute;left:8px;top:35px;width:128px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерТекущегоГода',
			style: 'position:absolute;left:742px;top:8px;width:63px;height:19px;',
		},
	]
});