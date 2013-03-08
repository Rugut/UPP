Ext.define('Справочники.ИнформационныеКарты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 205,width: 468,
	iconCls: 'bogus',
	title: 'Информационные карты',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:372px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:101px;top:33px;width:237px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекущийКодКарты',
			style: 'position:absolute;left:101px;top:81px;width:359px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВладелецКарты',
			style: 'position:absolute;left:101px;top:129px;width:359px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДисконтнойКарты',
			style: 'position:absolute;left:101px;top:153px;width:359px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидКарты',
			style: 'position:absolute;left:101px;top:57px;width:177px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипКарты',
			style: 'position:absolute;left:101px;top:105px;width:359px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипШтрихкода',
			style: 'position:absolute;left:372px;top:57px;width:88px;height:19px;',
		},
	]
});