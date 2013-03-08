Ext.define('Справочники.Работодатели.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 264,width: 518,
	iconCls: 'bogus',
	title: 'Работодатели',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:430px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:132px;top:33px;width:260px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:132px;top:58px;width:378px;height:48px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:66px;top:137px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:271px;top:137px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерФСС1',
			style: 'position:absolute;left:66px;top:162px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныйКодФСС',
			style: 'position:absolute;left:271px;top:162px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПодчиненностиФСС',
			style: 'position:absolute;left:459px;top:162px;width:51px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеТерриториальногоОрганаФСС',
			style: 'position:absolute;left:132px;top:188px;width:378px;height:43px;',
		},
	]
});