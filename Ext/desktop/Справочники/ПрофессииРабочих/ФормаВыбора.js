Ext.define('Справочники.ПрофессииРабочих.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:539px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Профессии рабочих',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:523px;height:259px;',
			height: 259,width: 523,
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
			style: 'position:absolute;left:0px;top:0px;width:539px;height:25px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Подбор из ОКПДТР',
				},
				{
					text:'Действие8',
				},
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
					text:'Действие формы выбрать',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
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
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
			]
		},
	]
});