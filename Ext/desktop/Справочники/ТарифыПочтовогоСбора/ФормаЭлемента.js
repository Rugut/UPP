Ext.define('Справочники.ТарифыПочтовогоСбора.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:305px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Тариф почтового сбора',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:33px;width:183px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				'-',
				{
					text:'Редактировать код номер1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:280px;width:400px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:166px;width:384px;height:104px;',
			height: 104,width: 384,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'С',
					width:'60',
				},
				{
					text:'по',
					width:'60',
				},
				{
					text:'Процент',
					width:'120',
				},
				{
					text:'Сумма',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:142px;width:384px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:284px;top:33px;width:23px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:309px;top:33px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокРасчетаПоТарифу',
			text: 'Порядок расчета по тарифу',
			style: 'position:absolute;left:8px;top:61px;width:384px;height:16px;',
		},
	]
});