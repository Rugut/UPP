Ext.define('Справочники.ПрожиточныеМинимумы.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:462px;height:294px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Прожиточный минимум субъекта РФ, в целом по РФ',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:343px;top:33px;width:29px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:374px;top:33px;width:80px;height:19px;',
		},
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
			style: 'position:absolute;left:93px;top:33px;width:240px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:462px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Редактировать код',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:269px;width:462px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:84px;width:446px;height:177px;',
			height: 177,width: 446,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'120',
				},
				{
					text:'Размер',
					width:'100',
				},
			]
		},
	]
});