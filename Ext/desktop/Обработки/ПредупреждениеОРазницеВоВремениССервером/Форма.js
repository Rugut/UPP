Ext.define('Обработки.ПредупреждениеОРазницеВоВремениССервером.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:179px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Разница во времени с сервером 1С:Предприятия',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:154px;width:600px;height:25px;',
			items:
			[
				{
					text:'Завершить работу',
				},
				{
					text:'Продолжить',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВремяНаСервере',
			text: 'Время на сервере:',
			style: 'position:absolute;left:8px;top:36px;width:156px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВремяНаСервере',
			style: 'position:absolute;left:178px;top:36px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВремяНаКлиенте',
			text: 'Время на этом компьютере:',
			style: 'position:absolute;left:8px;top:61px;width:156px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВремяНаКлиенте',
			style: 'position:absolute;left:178px;top:61px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаголовок',
			text: 'Дата и время, установленные на сервере, отличаются от настроек этого компьютера. ',
			style: 'position:absolute;left:8px;top:8px;width:584px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаголовок1',
			text: 'Разница во времени может привести к тому, что даты проведенных документов перестанут отражать реальную хронологию их проведения.

Рекомендуется установить одинаковое системное время на этом компьютере и на сервере.',
			style: 'position:absolute;left:8px;top:91px;width:584px;height:55px;',
		},
	]
});