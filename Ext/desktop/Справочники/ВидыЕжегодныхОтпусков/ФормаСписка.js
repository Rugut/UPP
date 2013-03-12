Ext.define('Справочники.ВидыЕжегодныхОтпусков.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:567px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Виды ежегодных отпусков',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:551px;height:259px;',
			height: 259,width: 551,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'250',
				},
				{
					text:'Способ расчета остатка отпуска',
					width:'120',
				},
				{
					text:'Количество дней отпуска в год',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:567px;height:25px;',
			items:
			[
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				'-',
				{
					text:'Действие9',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
			]
		},
	]
});