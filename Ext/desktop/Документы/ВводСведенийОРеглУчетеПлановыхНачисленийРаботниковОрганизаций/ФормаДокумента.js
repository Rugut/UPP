Ext.define('Документы.ВводСведенийОРеглУчетеПлановыхНачисленийРаботниковОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 366,width: 643,
	iconCls: 'bogus',
	title: 'Ввод сведений о регламентированном учете плановых начислений сотрудников организации',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:89px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:189px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:89px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснование',
			style: 'position:absolute;left:415px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:89px;top:314px;width:546px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:415px;top:57px;width:220px;height:19px;',
		},
	]
});