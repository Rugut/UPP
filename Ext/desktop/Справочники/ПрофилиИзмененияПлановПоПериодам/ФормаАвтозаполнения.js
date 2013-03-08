Ext.define('Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаАвтозаполнения',
	{
	extend: 'Ext.window.Window',
	height: 268,width: 296,
	iconCls: 'bogus',
	title: 'Параметры изменения по периодам',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоПериодовРаспределения',
			style: 'position:absolute;left:168px;top:54px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СмещениеПервогоПериодаРаспределения',
			style: 'position:absolute;left:168px;top:30px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазовыйКоэффициент',
			style: 'position:absolute;left:124px;top:192px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПриращениеЗаПериод',
			style: 'position:absolute;left:124px;top:216px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипРаспределения',
			style: 'position:absolute;left:124px;top:111px;width:164px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипИзменения',
			style: 'position:absolute;left:124px;top:135px;width:164px;height:19px;',
		},
	]
});