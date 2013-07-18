Ext.require(['Данные.Обработки.ПредупреждениеОРазницеВоВремениССервером'], function () 
{
	Ext.define('Обработки.ПредупреждениеОРазницеВоВремениССервером.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:179px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Разница во времени с сервером 1С:Предприятия',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьВремяНаСервере',
			text: 'Время на сервере:',
			style: 'position:absolute;left:8px;top:36px;width:156px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ВремяНаСервере',
			width: 120,
			height: 19,
			style: 'position:absolute;left:178px;top:36px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВремяНаКлиенте',
			text: 'Время на этом компьютере:',
			style: 'position:absolute;left:8px;top:61px;width:156px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ВремяНаКлиенте',
			width: 120,
			height: 19,
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
			text: 'Разница во времени может привести к тому, что даты проведенных документов перестанут отражать реальную хронологию их проведения.\r\n\r\nРекомендуется установить одинаковое системное время на этом компьютере и на сервере.',
			style: 'position:absolute;left:8px;top:91px;width:584px;height:55px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:154px;width:600px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Продолжить',
				},
				'-',
				{
					text:'Завершить работу',
				},
			]
		},
	]
	});
});