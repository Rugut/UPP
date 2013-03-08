Ext.define('Справочники.БанковскиеСчета.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 521,width: 568,
	iconCls: 'bogus',
	title: 'Элемент Банковские счета',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДенежныхСредств',
			style: 'position:absolute;left:492px;top:33px;width:68px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСчета',
			style: 'position:absolute;left:336px;top:33px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСчета',
			style: 'position:absolute;left:102px;top:33px;width:155px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:102px;top:469px;width:374px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БИКБанка',
			style: 'position:absolute;left:102px;top:82px;width:155px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоррсчетБанка',
			style: 'position:absolute;left:336px;top:82px;width:224px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:520px;top:469px;width:40px;height:19px;',
		},
	]
});