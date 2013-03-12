Ext.define('Справочники.СтатьиЗатрат.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:181px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статья затрат',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:386px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:428px;top:57px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:57px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:110px;top:57px;width:273px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидЗатрат',
			text: 'Вид затрат',
			style: 'position:absolute;left:8px;top:105px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЗатрат',
			style: 'position:absolute;left:110px;top:105px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусМатериальныхЗатрат',
			text: 'Статус мат. затрат:',
			style: 'position:absolute;left:231px;top:105px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатусМатериальныхЗатрат',
			style: 'position:absolute;left:334px;top:105px;width:158px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьХарактерЗатрат',
			text: 'Характер затрат:',
			style: 'position:absolute;left:8px;top:81px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактерЗатрат',
			style: 'position:absolute;left:110px;top:81px;width:382px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Вид расходов (НУ):',
			style: 'position:absolute;left:8px;top:129px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойВидЗатратНалоговогоУчета',
			style: 'position:absolute;left:110px;top:129px;width:382px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:156px;width:500px;height:25px;',
			items:
			[
				'-',
				{
					text:'OK',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:110px;top:33px;width:382px;height:19px;',
		},
	]
});