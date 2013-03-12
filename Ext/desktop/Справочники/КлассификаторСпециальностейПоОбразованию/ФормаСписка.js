Ext.define('Справочники.КлассификаторСпециальностейПоОбразованию.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:522px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Классификатор специальностей по образованию (ОКСО)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:506px;height:259px;',
			height: 259,width: 506,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:522px;height:25px;',
			items:
			[
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Подбор из ОКСО',
				},
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
			]
		},
	]
});