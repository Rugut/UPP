Ext.define('Справочники.КлассификаторИспользованияРабочегоВремени.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:691px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Классификатор использования рабочего времени',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:675px;height:280px;',
			height: 280,width: 675,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Буквенный код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Полное наименование',
					width:'220',
				},
				{
					text:'Рабочее время',
					width:'83',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:691px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие9',
				},
				'-',
			]
		},
	]
});