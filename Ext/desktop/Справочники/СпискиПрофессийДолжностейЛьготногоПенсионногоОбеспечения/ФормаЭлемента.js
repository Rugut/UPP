Ext.define('Справочники.СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспечения.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 109,width: 322,
	iconCls: 'bogus',
	title: 'Профессии и должности льготного пенсионного обеспечения',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:94px;top:33px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
	]
});