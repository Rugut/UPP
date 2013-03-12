Ext.define('Справочники.ВидыЕжегодныхОтпусков.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Виды ежегодных отпусков',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Наименование',
					width:'200',
				},
				{
					text:'Способ расчета остатка отпуска',
					width:'100',
				},
				{
					text:'Количество дней отпуска в год',
					width:'40',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Действ��е8',
				},
				{
					text:'',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действия формы выбрать',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
			]
		},
	]
});