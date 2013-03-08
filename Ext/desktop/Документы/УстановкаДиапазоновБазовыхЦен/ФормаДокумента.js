Ext.define('Документы.УстановкаДиапазоновБазовыхЦен.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 364,width: 506,
	iconCls: 'bogus',
	title: 'Установки диапазонов базовых цен',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:101px;top:33px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:244px;top:33px;width:254px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦен',
			style: 'position:absolute;left:101px;top:57px;width:397px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:101px;top:312px;width:397px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:101px;top:288px;width:397px;height:19px;',
		},
	]
});